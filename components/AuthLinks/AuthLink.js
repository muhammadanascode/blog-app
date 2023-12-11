import Link from "next/link";
import styles from "./AuthLink.module.css";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLink = () => {
  const {status} = useSession();
  const [open, setOpen] = useState(false);

  // console.log("Status of use Session", status);

  const handleSignOut = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login", // Specify the login page URL
    });
  };

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
          <Link href={"/"} onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href={"/newpost"} onClick={() => setOpen(!open)}>
            Write
          </Link>
          <Link href={"/contact"} onClick={() => setOpen(!open)}>
            Contact
          </Link>
          <Link href={"/about"} onClick={() => setOpen(!open)}>
            About
          </Link>
          {status === "authenticated" ? (
            <span className={styles.link} onClick={handleSignOut}>
              Logout
            </span>
          ) : (
            <span>
              <Link href={"/login"} onClick={() => setOpen(!open)}>
                Login
              </Link>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLink;
