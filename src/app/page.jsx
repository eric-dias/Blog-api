import Image from "next/image";
import styles from "./page.module.css";
import { connectToDb } from "@/lib/util";

export default function Home() {
  connectToDb();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div>Title</div>
    </main>
  );
}
