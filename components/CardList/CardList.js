import React from "react";
import styles from "./CardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const getData = async (page, cat) => {
  console.log("getData", cat);
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}${cat ? `&cat=${cat}` : ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const CardList = ({ page, cat }) => {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { posts, count } = await getData(page, cat);
        setData(posts);
        setTotal(count);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [page, cat]);

  const POST_PER_PAGE = 3;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < total;

  // console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.length > 0
          ? data.map((item) => {
              return <Card item={item} key={item._id} />;
            })
          : null}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
