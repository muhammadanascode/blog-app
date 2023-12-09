import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/singlepost.module.css";
import Menu from "../../components/Menu/Menu";
import Image from "next/image";
import Comments from "../../components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (slug) {
          const posts = await getData(slug);
          setData(posts);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [slug]);

  if (!slug) {
    return "Loading";
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          {data.user && (
            <div className={styles.user}>
              <div className={styles.userimage}>
                {data.user.image && (
                  <Image
                    src={`${data.user.image}`}
                    alt="img"
                    width={30}
                    height={30}
                    className={styles.avatar}
                  />
                )}
              </div>
              <div className={styles.userTextContainer}>
                {data.user.name && (
                  <span className={styles.username}>{data.user.name}</span>
                )}
                {data.createdAt && (
                  <span className={styles.date}>
                    {data.createdAt.substring(0, 10)}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img ? `${data.img}` : "/post.jpg"}
            alt="img"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
          {/* Assuming the Comments component needs data as a prop */}
          <div className={styles.comment}>
            <Comments data={data} slug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPost;
