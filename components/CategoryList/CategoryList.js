import React from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link
          href={"/blog?cat=style"}
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={"/style.jpg"}
            width={32}
            height={32}
            alt="styleimg"
            className={styles.image}
          />
          Style
        </Link>
        <Link
          href={"/blog?cat=fashion"}
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src={"/fashion.jpeg"}
            width={32}
            height={32}
            alt="fashionimg"
            className={styles.image}
          />
          Fashion
        </Link>
        <Link
          href={"/blog?cat=food"}
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src={"/food.jpeg"}
            width={32}
            height={32}
            alt="foodimg"
            className={styles.image}
          />
          Food
        </Link>
        <Link
          href={"/blog?cat=travel"}
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src={"/travel.jpeg"}
            width={32}
            height={32}
            alt="travelimg"
            className={styles.image}
          />
          Travel
        </Link>
        <Link
          href={"/blog?cat=culture"}
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src={"/culture.png"}
            width={32}
            height={32}
            alt="cultureimg"
            className={styles.image}
          />
          Culture
        </Link>
        <Link
          href={"/blog?cat=coding"}
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src={"/coding.jpeg"}
            width={32}
            height={32}
            alt="codingeimg"
            className={styles.image}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
