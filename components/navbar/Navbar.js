import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../AuthLinks/AuthLink";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/fblogo.png"} alt="fb" width={24} height={24} />
        <Image src={"/instalogo.jpeg"} alt="insta" width={24} height={24} />
        <Image src={"/linkedlogo.png"} alt="linkedin" width={24} height={24} />
      </div>
      <div className={styles.logo}>ScriptSynergy</div>
      <div className={styles.links}>
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <AuthLink />
      </div>
    </div>
  );
};
