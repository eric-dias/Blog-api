import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

const websiteDomain = "mongoteste4-git-master-eric-dias.vercel.app";

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
};

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`https://${websiteDomain}/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("error to fetch api");
  }

  return res.json();
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //Get the post using the API
  const post = await getData(slug);

  //Get the post using the function from data.js
  //const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detailContainer}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
