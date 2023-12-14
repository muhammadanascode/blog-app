"use client";

import React, { useEffect } from "react";
import styles from "../styles/login.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { IoPersonSharp } from "react-icons/io5";
import { toast } from "react-toastify";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  console.log(status);

  // useEffect(() => {

  // }, [status, router]);

  if (status === "authenticated") {
    router.replace("/");
    toast.success("Logged in successfully", {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  if (status === "loading") {
    return "Loading plase wait...";
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.person}>
          {" "}
          <IoPersonSharp className={styles.img} />{" "}
        </div>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Signin with google
        </div>
      </div>
    </div>
  );
};

export default Login;
