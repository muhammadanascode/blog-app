"use client";

import React, { useState } from "react";
import styles from "../styles/newppost.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";

<FaImages />;

const newpost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <FaCirclePlus className={styles.icons} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <FaImages className={styles.icons} />
            </button>
            <button className={styles.addButton}>
              <FaVideo className={styles.icons} />
            </button>
            <button className={styles.addButton}>
              <FaExternalLinkSquareAlt className={styles.icons} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell me your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default newpost;
