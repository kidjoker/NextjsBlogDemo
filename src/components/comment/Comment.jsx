import styles from "./comment.module.css";
import Image from "next/image";

const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles.user}>
        {comment.user.image && (
          <Image
            src={comment.user.image}
            alt=""
            width={50}
            height={50}
            className={styles.image}
          ></Image>
        )}
        <div className={styles.userInfo}>
          <span className={styles.username}>{comment.user.name}</span>
          <span className={styles.date}>{comment.createdAt.substring(0,10)}</span>
        </div>
      </div>
      <p className={styles.desc}>{comment.desc}</p>
    </div>
  );
};

export default Comment;
