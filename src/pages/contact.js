import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  return (
    <div className={styles.container}>
      <h1>Get in touch with us</h1>
      <div className={styles.line}>
        <p>
          "Have questions or feedback? Reach out to us at{" "}
          <a href="mailto:anassohail34343@gmail.com">
            {" "}
            anassohail34343@gmail.com
          </a>{" "}
          We'd love to hear from you!"
        </p>
      </div>
      <div className={styles.alternate}>
        <h3>Alternately you can contact us on</h3>
        <div className={styles.social}>
          <Link href={"https://www.facebook.com/ANASCX"}>
            <Image src={"/fblogo.png"} alt="fb" width={48} height={48} />
          </Link>
          <Link href={"https://www.instagram.com/anassohail12"}>
            <Image src={"/instalogo.jpeg"} alt="insta" width={48} height={48} />
          </Link>
          <Link href={"https://www.linkedin.com/in/anas-sohail-038026262"}>
            <Image
              src={"/linkedlogo.png"}
              alt="linkedin"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default contact;
