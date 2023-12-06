import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
Image;

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/coding.jpeg"}
              alt="img"
              width={30}
              height={30}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Anas Sohail</span>
              <span className={styles.date}>11.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            What a insightful read! Overcoming the challenges of coding
            resonates with every learner on this journey. The emphasis on
            persistence, diversity, and inclusive learning environments is spot
            on. Kudos to the author for shedding light on the nuanced aspects of
            the coding experience! #CodingJourney #TechExploration
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/coding.jpeg"}
              alt="img"
              width={30}
              height={30}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Anas Sohail</span>
              <span className={styles.date}>11.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            What a insightful read! Overcoming the challenges of coding
            resonates with every learner on this journey. The emphasis on
            persistence, diversity, and inclusive learning environments is spot
            on. Kudos to the author for shedding light on the nuanced aspects of
            the coding experience! #CodingJourney #TechExploration
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={"/coding.jpeg"}
              alt="img"
              width={30}
              height={30}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Anas Sohail</span>
              <span className={styles.date}>11.12.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            What a insightful read! Overcoming the challenges of coding
            resonates with every learner on this journey. The emphasis on
            persistence, diversity, and inclusive learning environments is spot
            on. Kudos to the author for shedding light on the nuanced aspects of
            the coding experience! #CodingJourney #TechExploration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
