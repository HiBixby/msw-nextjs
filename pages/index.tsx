import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState<{ text: string }>();
  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <main>
      <h1>{data?.text}</h1>
    </main>
  );
}
