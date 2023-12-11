import React from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={"/Anas.jpg"} width={400} height={400} alt="img" />
      </div>
      <div className={styles.text}>
        <h1>Welcome to Script Synergy: Unleashing the Power of Words!</h1>

        <p>
          Hello, I'm Muhammad Anas Sohail, a 19-year-old MERN stack developer
          with a passion for crafting digital experiences. Having studied BSCS
          at the University of Karachi, I've embarked on a journey to bring
          together technology and creativity.
        </p>

        <h2>What is Script Synergy?</h2>
        <p>
          Script Synergy is my brainchild, a platform where readers can dive
          into a world of captivating blogs and writers can unleash their
          creativity by sharing their own. Here, every story finds a home, and
          every voice has the power to resonate.
        </p>

        <h2>Why Script Synergy?</h2>
        <p>
          With a deep understanding of the MERN stack, I've meticulously
          designed this platform to provide a seamless and immersive experience
          for users. From sleek designs to intuitive interfaces, Script Synergy
          is crafted to make your journey through words a delightful one.
        </p>

        <h2>Join the Community:</h2>
        <p>
          Whether you're a seasoned writer or a curious reader, Script Synergy
          welcomes you to be part of this vibrant community. Let your words find
          their wings, and let's create a synergy of stories that resonate with
          the world.
        </p>

        <p>
          Explore, create, and immerse yourself in the world of Script Synergy.
          I can't wait to see the stories that unfold and the community that
          flourishes.
        </p>
        <p>Happy reading and writing!</p>
        <strong>
          <p> Muhammad Anas Sohail</p>
        </strong>
      </div>
    </div>
  );
};

export default about;
