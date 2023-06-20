"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Pricing",
    url: "/pricing",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/wardu-logo.svg' alt='logo' width={60} height={60} />
          </Link>
        </div>
        <div className={styles.links}>
          {links.map((link) => (
            <Link href={link.url} key={link.id} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
