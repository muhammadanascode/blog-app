import React from "react";
import styles from "./menuposts.module.css";
import Image from "next/image";
import Link from "next/link";

const Menuposts = ({ title, subtitle, withImage }) => {
  return (
    <div>
      <h2 className={styles.subtitle}>{title}</h2>
      <h1 className={styles.title}>{subtitle}</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image
                src={"/post.jpg"}
                alt="img"
                fill
                className={styles.image}
              />
            </div>
          ) : null}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.posttitle}>
              Coding: Where creativity meets logic in the language of machines.
            </h3>
            <div className={styles.detail}>
              <span className={styles.name}>Anas Sohail</span>
              <span className={styles.date}>--12.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image
                src={"/post.jpg"}
                alt="img"
                fill
                className={styles.image}
              />
            </div>
          ) : null}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.posttitle}>
              Fashion: Where creativity meets logic in the language of machines.
            </h3>
            <div className={styles.detail}>
              <span className={styles.name}>Anas Sohail</span>
              <span className={styles.date}>--12.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image
                src={"/post.jpg"}
                alt="img"
                fill
                className={styles.image}
              />
            </div>
          ) : null}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.posttitle}>
              Food: Where creativity meets logic in the language of machines.
            </h3>
            <div className={styles.detail}>
              <span className={styles.name}>Anas Sohail</span>
              <span className={styles.date}>--12.12.2023</span>
            </div>
          </div>
        </Link>
        <Link href={"/"} className={styles.item}>
          {withImage ? (
            <div className={styles.imageContainer}>
              <Image
                src={"/post.jpg"}
                alt="img"
                fill
                className={styles.image}
              />
            </div>
          ) : null}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.posttitle}>
              Culture: Where creativity meets logic in the language of machines.
            </h3>
            <div className={styles.detail}>
              <span className={styles.name}>Anas Sohail</span>
              <span className={styles.date}>--12.12.2023</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menuposts;
