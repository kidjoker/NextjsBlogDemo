import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";

const MenuPosts = ({ withImage, category, user, date }) => {
  const categoryClass = styles[category];
  category = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <Link href="/" className={styles.item}>
      <div className={styles.item}>
        {withImage && (
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${categoryClass}`}>
            {category}
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>{user} - </span>
            <span className={styles.date}>{date}</span>
          </div>
        </div>
      </div>
      <div className={styles.text}></div>
    </Link>
  );
};

export default MenuPosts;
