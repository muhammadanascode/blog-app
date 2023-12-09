import styles from "../styles/Home.module.css";
import { Featured } from "../../components/Featured/Featured";
import CategoryList from "../../components/CategoryList/CategoryList";
import CardList from "../../components/CardList/CardList";
import Menu from "../../components/Menu/Menu";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const  query = router.query;
  const page = query?.page ? parseInt(query.page) : 1
  
  return (
    <>
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList page={page} />
          <Menu />
        </div>
      </div>
    </>
  );
}
