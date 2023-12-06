import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.jpeg"} alt="img" width={50} height={50} />
          <h1 className={styles.logoText}>SyriptSynergy</h1>
        </div>
        <p className={styles.desc}>
          ScriptSynergy, your ultimate destination for insightful content and
          creative narratives. Explore a world of diverse stories, tech
          insights, and thought-provoking articles curated to inspire, inform,
          and entertain. Join our community where writing meets innovation, and
          embark on a journey of discovery with ScriptSynergy – where words come
          to life.
        </p>
        <div className={styles.icons}>
          <Image src={"/fblogo.png"} width={18} height={18} alt="img" />
          <Image src={"/instalogo.jpeg"} width={18} height={18} alt="img" />
          <Image src={"/linkedlogo.png"} width={18} height={18} alt="img" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/"}>Style</Link>
          <Link href={"/"}>Fashion</Link>
          <Link href={"/"}>Food</Link>
          <Link href={"/"}>Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/"}>Facebook</Link>
          <Link href={"/"}>Instagram</Link>
          <Link href={"/"}>LinkedIn</Link>
          <Link href={"/"}>Youtube</Link>
        </div>
      </div>
    </div>
  );
};
