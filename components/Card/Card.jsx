import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({item}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={item.img ? `${item.img}` : '/post.jpg'} fill alt="postimg" className={styles.image} /> 
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.12.2023</span>
          <span className={styles.category}>Coding</span>
        </div>
        <Link href={'/'}>
          <h2 className={styles.title}>{item.title}</h2>
        </Link>
        <p className={styles.desc}>
          {item.desc}
        </p>
        <Link href={"/"} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
