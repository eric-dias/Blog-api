"use client";
import styles from "./links.module.css";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
import Navlink from "./navLink/navLink";

const linksArray = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = ({ session }) => {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.linksList}>
        {linksArray.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}

        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <Navlink item={{ title: "Admin", path: "/admin" }} />
            )}
            <form action={handleLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <Navlink item={{ title: "Login", path: "/login" }} />
        )}
      </div>

      <Image
        className={styles.menuButton}
        src="/menu.png"
        alt="menu"
        width={30}
        height={30}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={styles.mobileLinksList}>
          {linksArray.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
