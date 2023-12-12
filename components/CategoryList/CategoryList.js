import React, { useEffect, useState } from "react";
import styles from "./CategoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("/api/categories", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.length > 0
          ? data.map((item) => (
              <Link
                href={`/blog?cat=${item.slug}`}
                key={item.id}
                className={`${styles.category} ${styles[item.slug]}`}
              >
                {item.img&&<Image
                  src={`${item.img}`}
                  width={32}
                  height={32}
                  alt="styleimg"
                  className={styles.image}
                />}
                {item.title}
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default CategoryList;
