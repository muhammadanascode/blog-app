"use client";

import React from "react";
import styles from "../styles/login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  console.log(status);

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
      </div>
    </div>
  );
};

export default Login;
