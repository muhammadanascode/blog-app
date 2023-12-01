import { Inter } from "next/font/google";
import styles from "../styles/Home.module.css";
import { Featured } from "../../components/Featured/Featured";
import CategoryList from "../../components/CategoryList/CategoryList";
import CardList from "../../components/CardList/CardList";
import Menu from "../../components/Menu/Menu";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
    </>
  );
}
