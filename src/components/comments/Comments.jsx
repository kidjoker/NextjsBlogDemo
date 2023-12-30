"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();

  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

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

      {isLoading
        ? "loading"
        : data.map((comment) => (
            <div className={styles.comments}>
              <Comment key={comment._id} comment={comment} />
            </div>
          ))}
    </div>
  );
};

export default Comments;
