import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "../AuthLinks/AuthLink";

export const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.social}>
          <Link href={"https://www.facebook.com/ANASCX"}>
            <Image src={"/fblogo.png"} alt="fb" width={24} height={24} />
          </Link>
          <Link href={"https://www.instagram.com/anassohail12/"}>
            <Image src={"/instalogo.jpeg"} alt="insta" width={24} height={24} />
          </Link>
          <Link href={"https://www.linkedin.com/in/anas-sohail-038026262/"}>
            <Image
              src={"/linkedlogo.png"}
              alt="linkedin"
              width={24}
              height={24}
            />
          </Link>
        </div>
        <div className={styles.logo}>ScriptSynergy</div>
        <div className={styles.links}>
          <Link className={styles.link} href={"/"}>
            Home
          </Link>
          <Link className={styles.link} href={"/contact"}>
            Contact
          </Link>
          <Link className={styles.link} href={"/about"}>
            About
          </Link>
          <Link href={"/newpost"} className={styles.link}>
            Write
          </Link>
          <AuthLink />
        </div>
      </div>
    </>
  );
};
