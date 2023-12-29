import styles from "./comment.module.css";
import Image from "next/image";

const Comment = ({ username, date }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.user}>
        <Image
          src="/p1.jpeg"
          alt=""
          width={50}
          height={50}
          className={styles.image}
        ></Image>
        <div className={styles.userInfo}>
          <span className={styles.username}>{username}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
        quam nisi magni ea laborum inventore voluptatum laudantium repellat
        ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde sit
        culpa debitis
      </p>
    </div>
  );
};

export default Comment;
