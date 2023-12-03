import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>"What's hot"</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
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
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
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
        <Link href={"/"} className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
             Travel
            </span>
            <h3 className={styles.posttitle}>
              Travel: Where creativity meets logic in the language of machines.
            </h3>
            <div className={styles.detail}>
              <span className={styles.name}>Anas Sohail</span>
              <span className={styles.date}>--12.12.2023</span>
            </div>
          </div>
        </Link>
      </div>
      {/* Second Row */}
      <h2 className={styles.subtitle}>Choosen by editor</h2>
      <h1 className={styles.title}>Editors's Pick</h1>
      <div className={styles.items}>
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
          </div>
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
          <div className={styles.imageContainer}>
            <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>
              Food
            </span>
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
          <div className={styles.imageContainer}>
            <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
          </div>
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
        <Link href={"/"} className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src={"/post.jpg"} alt="img" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
             Travel
            </span>
            <h3 className={styles.posttitle}>
              Travel: Where creativity meets logic in the language of machines.
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

export default Menu;
