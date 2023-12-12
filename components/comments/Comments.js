'use client';

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
Image;
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }
  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const [desc, setDesc] = useState("");
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );
  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setDesc("")
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="Write a comment..."
            className={styles.input}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login" className={styles.loginlink}>
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading"
          : data?.map((item) => {
              return (
                <div className={styles.comment} key={item.id}>
                  <div className={styles.user}>
                    {item.user?.image && (
                      <Image
                        src={item.user.image}
                        alt="img"
                        width={30}
                        height={30}
                        className={styles.image}
                      />
                    )}
                    <div className={styles.userInfo}>
                      <span className={styles.username}>{item.user.name}</span>
                      <span className={styles.date}>
                        {item.createdAt.substring(0, 10)}
                      </span>
                    </div>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Comments;
