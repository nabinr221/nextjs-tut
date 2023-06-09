import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>THIS IS HOME PAGE</h1>

      <Link href="/login">goto login page</Link>
      <Link href="/about">goto about page page</Link>
    </main>
  );
}
