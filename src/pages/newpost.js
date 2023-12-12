"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/newppost.module.css";
import { FaCirclePlus } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../../utils/firebase";

const storage = getStorage(app);

const Newpost = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [media, setMedia] = useState("");
  const [cat, setCat] = useState("style");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (file) {
      const name = new Date().getTime + "-" + file.name;
      const storageRef = ref(storage, name);
      const upload = () => {
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            // Handle unsuccessful uploads
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setMedia(downloadURL);
            });
          }
        );
      };
      file && upload();
    }
  }, [file]);

  if (status === "unauthenticated") {
    router.replace("/");
  }

  if (status === "loading") {
    return "Loading";
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .slice(0, 50); // Optional: Limit the length of the slug

  const obj = {
    title,
    desc: value,
    img: media,
    slug: slugify(title),
    catSlug: cat,
  };

  console.log(obj);

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        name="Catgeory"
        id=""
        className={styles["category-select"]}
        onChange={(e) => setCat(e.target.value)}
      >
        <option value="style" selected>
          style
        </option>
        <option value="culture">culture</option>
        <option value="coding">coding</option>
        <option value="food">food</option>
        <option value="fashion">fashion</option>
        <option value="travel">travel</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <FaCirclePlus className={styles.icons} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <FaImages className={styles.icons} />
              </label>
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
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default Newpost;
