import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";
import Link from "next/link";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Reader! </b>Discover more stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/blog.png"} fill className={styles.image} alt="img" />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Understanding the Basics of Blogging
          </h1>
          <p className={styles.postDesc}>
            There are more than 600 million blogs active globally, and for good
            reason. Whether it’s part of your hobby or profession, blogging
            comes with a variety of benefits. For businesses, creating a blog is
            a powerful marketing strategy. Not only does it strengthen your SEO,
            but it also establishes your authority in the field and helps build
            connections with your target audience. Blogging has similar
            advantages when used by hobby bloggers and professional...
          </p>
          <Link href={'https://www.wix.com/blog/blogging-for-beginners'} className={styles.button}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};
