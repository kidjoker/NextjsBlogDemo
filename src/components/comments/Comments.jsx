"use client";

import styles from "./comments.module.css";
import Link from "next/link";
import Comment from "../comment/Comment";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useState } from "react";

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

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <h1 className={styles.write}>
          <textarea
            className={styles.input}
            placeholder="Write a comment..."
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </h1>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      {isLoading
        ? "loading"
        : data.map((comment) => (
            <div className={styles.comments} key={comment._id}>
              <Comment comment={comment} />
            </div>
          ))}
    </div>
  );
};

export default Comments;
