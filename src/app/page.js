"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main>
      <h1>THIS IS HOME PAGE</h1>

      <Link href="/login">goto login page</Link>
      <Link href="/about">goto about page page</Link>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        goto about page
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        goto login page
      </button>
    </main>
  );
}
