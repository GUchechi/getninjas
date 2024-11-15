"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.nav} ${isScrolled ? styles.normal : styles.glass}`}
    >
      <Link className={styles.logo} href="/">
        <Image src="/logo.png" width={60} height={10} alt="Site Logo" />
      </Link>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/users">Ninja</Link>
      </div>
    </nav>
  );
};

export default Navbar;
