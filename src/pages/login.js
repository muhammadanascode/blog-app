"use client";

import React from "react";
import styles from "../styles/login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const login = () => {
  const { data, status } = useSession();
  console.log(data, status);
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return "loading";
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
