"use client";
import Link from "next/link";
import styles from "./AuthLink.module.css";
import React, { useState } from "react";

const AuthLink = () => {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);
  return (
    <>
      {status === "notauthenticated" ? (
        <span>
          <Link href={"/login"} className={styles.link}>
            Login
          </Link>
        </span>
      ) : (
        <span>
          <Link href={"/logout"} className={styles.link}>
            Logout
          </Link>
        </span>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>Home</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/about"}>About</Link>
          {status === "notauthenticated" ? (
            <span>
              <Link href={"/login"}>
                Login
              </Link>
            </span>
          ) : (
            <span>
              <Link href={"/logout"}>
                Logout
              </Link>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
