import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt="image" fill className={styles.img} />
          </div>
        )}

        <span className={styles.date}>{post.createdAt.slice(0, 10)}</span>
      </div>
      <div className={styles.botContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
