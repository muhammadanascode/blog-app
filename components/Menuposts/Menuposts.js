import React, { useEffect, useState } from "react";
import styles from "./menuposts.module.css";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("/api/posts/popular");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Menuposts = ({ title, subtitle, withImage }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts } = await getData();
        setData(posts);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2 className={styles.subtitle}>{title}</h2>
      <h1 className={styles.title}>{subtitle}</h1>
      <div className={styles.items}>
        {data &&
          data.map((item) => {
            return (
              <Link
                href={`/${item.slug}`}
                className={styles.item}
                key={item.id}
              >
                {withImage ? (
                  <div className={styles.imageContainer}>
                    <Image
                      src={item.img ? item.img : "/post.jpg"}
                      alt="img"
                      fill
                      className={styles.image}
                    />
                  </div>
                ) : null}
                <div className={styles.textContainer}>
                  <span className={`${styles.category} ${styles.coding}`}>
                    {item.catSlug}
                  </span>
                  <h3 className={styles.posttitle}>{item.title}</h3>
                  <div className={styles.detail}>
                    <span className={styles.name}>{item.user.name}</span>
                    <span className={styles.date}>
                      -{item.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Menuposts;
