import React from "react";
import styles from "../styles/blog.module.css";
import CardList from "../../components/CardList/CardList";
import Menu from "../../components/Menu/Menu";
import { useRouter } from "next/router";

const blog = () => {
  const router = useRouter();
  const  query = router.query;
  const page = query?.page ? parseInt(query.page) : 1
  const {cat} = router.query
  console.log(cat);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blogs</h1>
      <div className={styles.content}>
        <CardList cat={cat} page ={page} />
        <Menu />
      </div>
    </div>
  );
};

export default blog;
