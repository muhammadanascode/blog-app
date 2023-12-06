import Link from "next/link";
import styles from "./AuthLink.module.css";
import React, { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthLink = () => {
  const { data, status } = useSession();
  const [open, setOpen] = useState(false);

  console.log("Status of use Session", status);

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login", // Specify the login page URL
    });
  };

  console.log("Logout");

  return (
    <>
      {status === "authenticated" ? (
        <span className={styles.link} onClick={handleSignOut}>
          Logout
        </span>
      ) : (
        <span>
          <Link href={"/login"} className={styles.link}>
            Login
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
          {status === "authenticated" ? (
            <span className={styles.link} onClick={handleSignOut}>
              Logout
            </span>
          ) : (
            <span>
              <Link href={"/login"}>Login</Link>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
