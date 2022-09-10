import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>NINJA LIST | HOME</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <div>
        <h1 className={styles.title}>HOME NEXT JS</h1>
        <p className={styles.text}>I am alvin acosta.</p>
        <p className={styles.text}>
          I am a Manila-based ReactJs Developer. Full Stack Developer.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
