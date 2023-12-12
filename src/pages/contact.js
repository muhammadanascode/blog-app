import React from "react";
import styles from "../styles/contact.module.css";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1>Get in touch with us</h1>
      <div className={styles.line}>
        <p>
          &ldquo;Have questions or feedback? Reach out to us at{' '}
          <a href="mailto:anassohail34343@gmail.com">
            &nbsp;anassohail34343@gmail.com
          </a>{' '}
          We&apos;d love to hear from you!!&rdquo;
        </p>
      </div>
      <div className={styles.alternate}>
        <h3>Alternately you can contact us on</h3>
        <div className={styles.social}>
          <a href={"https://www.facebook.com/ANASCX"} target="_blank" rel="noopener noreferrer">
            <Image src={"/fblogo.png"} alt="fb" width={48} height={48} />
          </a>
          <a href={"https://www.instagram.com/anassohail12"} target="_blank" rel="noopener noreferrer">
            <Image src={"/instalogo.jpeg"} alt="insta" width={48} height={48} />
          </a>
          <a href={"https://www.linkedin.com/in/anas-sohail-038026262"} target="_blank" rel="noopener noreferrer">
            <Image src={"/linkedlogo.png"} alt="linkedin" width={48} height={48} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
