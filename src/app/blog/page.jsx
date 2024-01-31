import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

const websiteDomain = "mongoteste4-git-master-eric-dias.vercel.app";

// FETCH DATA WITH AN API

const getData = async () => {
   const res = await fetch(`https://${websiteDomain}/api/blog`);

  if (!res.ok) {
    throw new Error("error to fetch api");
  }

  return res.json();
};

const BlogPage = async () => {

  // FETCH DATA WITH AN API
  const posts = await getData()

  // FETCH DATA WITHOUT AN API
  //const posts = await getPosts();


  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.slug}>
          <PostCard post={post}/>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
