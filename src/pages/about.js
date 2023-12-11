import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}></div>
      <div className={styles.image}>
        <Image src={} width={} 
        height={} alt ="img" />
      </div>
    </div>
  );
};

export default about;
