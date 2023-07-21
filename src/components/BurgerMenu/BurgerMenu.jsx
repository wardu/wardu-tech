"use client";

import styles from "./BurgerMenu.module.css";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Burger = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const burgerMenuButton = (
    <div className={styles.burgerButton}>
      <p className={styles.burgerText}>Menu</p>
      <Image
        src='/images/bolt.png'
        alt='lightning bolt menu icon'
        width={30}
        height={30}
      />
    </div>
  );
  const burgerMenuClose = (
    <div className={styles.burgerButton}>
      <p className={styles.burgerText}>Close</p>
      <Image
        src='/images/x.png'
        alt='x close menu icon'
        width={30}
        height={30}
      />
    </div>
  );

  return (
    <nav className={styles.burgerContainer}>
      <div onClick={() => setOpen(!open)}>
        {open ? burgerMenuClose : burgerMenuButton}
      </div>

      {open && (
        <div className={styles.burgerLinks}>
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.url);

            return (
              <Link
                onClick={closeMenu}
                className={isActive ? styles.linkActive : styles.linkInactive}
                href={link.url}
                key={link.id}
              >
                {link.title}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Burger;
