"use client";

import React, { useEffect } from "react";
import styles from "../styles/login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const login = () => {
  const { status } = useSession();
  const router = useRouter();
  console.log();(status)

  if (status === "authenticated") {
    router.replace("/");
  }

  if (status === "loading") {
    return "Loading plase wait...";
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Signin with google
        </div>
        <div className={styles.socialButton}>Signin with github</div>
        <div className={styles.socialButton}>Signin with facebook</div>
      </div>
    </div>
  );
};

export default login;
