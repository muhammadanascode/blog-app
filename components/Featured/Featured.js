import React from "react";
import styles from "./Featured.module.css";
import Image from "next/image";

export const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
       <b>Hey, Anas Sohail! </b>Discover more stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={'/blog.jpg'} fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Understanding the Basics of Blogging</h1>
          <p className={styles.postDesc}>"Understanding the Basics of Blogging" is a comprehensive guide designed to introduce newcomers to the world of blogging. This blog series navigates readers through the essential elements of creating and managing a blog, starting with an overview of blogging's evolution and key components like posts, pages, and comments. It offers practical advice on selecting the right platform, providing step-by-step instructions for setting up a blog, and customizing its appearance. </p>
          <button className={styles.button}>Read more</button>
        </div>
      </div>
    </div>
  );
};
