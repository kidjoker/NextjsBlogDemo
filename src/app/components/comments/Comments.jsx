import styles from "./comments.module.css";
import Link from "next/link";
import Comment from "../comment/Comment";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <h1 className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="Write a comment..."
          ></textarea>
          <button className={styles.button}>Send</button>
        </h1>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <Comment username="John Doe" date="10.10.2021" />
        <Comment username="John B" date="10.10.2020" />
        <Comment username="John C" date="10.10.2022" />
        <Comment username="John D" date="10.10.2023" />
      </div>
    </div>
  );
};

export default Comments;
