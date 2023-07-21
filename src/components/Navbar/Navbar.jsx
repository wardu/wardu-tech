"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const navLinks = [
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
  const pathname = usePathname();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/'>
            <div className={styles.logoDesktop}>
              <h2 className={styles.logoText}>WARDU</h2>
              <h2 className={styles.logoText}>TECHNOLOGIES.</h2>
            </div>
            <div className={styles.logoMobile}>
              <h2 className={styles.logoText}>WARDU</h2>
              <h2 className={styles.logoText}>TECH.</h2>
            </div>
          </Link>
        </div>
        <BurgerMenu />
        <div className={styles.links}>
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.url);

            return (
              <Link
                className={isActive ? styles.linkActive : styles.linkInactive}
                href={link.url}
                key={link.id}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
