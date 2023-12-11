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
        <Link href={"https://www.facebook.com/ANASCX"}>
            <Image src={"/fblogo.png"} alt="fb" width={18} height={18} />
          </Link>
          <Link href={"https://www.instagram.com/anassohail12/"}>
            <Image src={"/instalogo.jpeg"} alt="insta" width={18} height={18} />
          </Link>
          <Link href={"https://www.linkedin.com/in/anas-sohail-038026262/"}>
            <Image
              src={"/linkedlogo.png"}
              alt="linkedin"
              width={18}
              height={18}
            />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href={"/"}>Homepage</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={"/blog?cat=style"}>Style</Link>
          <Link href={"/blog?cat=fashion"}>Fashion</Link>
          <Link href={"/blog?cat=food"}>Food</Link>
          <Link href={"/blog?cat=coding"}>Coding</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href={"/https://www.facebook.com/ANASCX"}>Facebook</Link>
          <Link href={"/https://www.instagram.com/anassohail12"}>Instagram</Link>
          <Link href={"/https://www.linkedin.com/in/anas-sohail-038026262"}>LinkedIn</Link>
          <Link href={"https://github.com/muhammadanascode"}>Github</Link>
        </div>
      </div>
    </div>
  );
};
