import Link from "next/link";
import Links from "./links/Links";
import { auth } from "@/lib/auth";
import styles from "./navbar.module.css";

//import ThemeToggle from "../themeToggle/ThemeToggle";


const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
      {/* <ThemeToggle/> */}
    </div>
  );
};

export default Navbar;
