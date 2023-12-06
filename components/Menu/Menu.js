import React from "react";
import styles from "./Menu.module.css";
import Link from "next/link";
import Menuposts from "../Menuposts/Menuposts";

const Menu = () => {
  return (
    <div className={styles.container}>
      <Menuposts
        withImage={false}
        title={"Whats hot"}
        subtitle={"Most Popular"}
      />
      {/* Categories */}
      <h2 className={styles.subtitle}>Discover by topics</h2>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categoryList}>
        <Link
          href={"/blog?cat=style"}
          className={`${styles.categoryItem} ${styles.style}`}
        >
          Style
        </Link>
        <Link
          href={"/blog?cat=fashion"}
          className={`${styles.categoryItem} ${styles.fashion}`}
        >
          Fashion
        </Link>
        <Link
          href={"/blog?cat=food"}
          className={`${styles.categoryItem} ${styles.food}`}
        >
          Food
        </Link>
        <Link
          href={"/blog?cat=travel"}
          className={`${styles.categoryItem} ${styles.travel}`}
        >
          Travel
        </Link>
        <Link
          href={"/blog?cat=culture"}
          className={`${styles.categoryItem} ${styles.culture}`}
        >
          Culture
        </Link>
        <Link
          href={"/blog?cat=coding"}
          className={`${styles.categoryItem} ${styles.coding}`}
        >
          Coding
        </Link>
      </div>
      <Menuposts
        withImage={true}
        title={"choosen by editor"}
        subtitle={"Editors Pick"}
      />
    </div>
  );
};

export default Menu;
