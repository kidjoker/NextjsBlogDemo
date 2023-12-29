import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Card from "@/app/components/card/Card";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const data = await getData(page);

  const POST_PER_PAGE = parseInt(process.env.POST_PER_PAGE);
  const hasPrev = page > 1;
  const hasNext = true;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data.map((item) => {
          return <Card key={item._id} item={item} />;
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
