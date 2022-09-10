import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Ninja } from "../../interfaces/interfaces";
import styles from "../../styles/Ninjas.module.css";

const Ninjas = ({ ninjas }: { ninjas: Ninja[] }) => {
  console.log(ninjas);
  return (
    <>
      <Head>
        <title>NINJA LIST | ALL NINJAS</title>
        <meta name="keywords" content="ninja" />
      </Head>
      <h1>All Ninjas</h1>
      {ninjas.map((item) => (
        <Link href={`/ninjas/${item.id}`} key={item.id}>
          <a className={styles.single}>
            <h3>{item.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Ninjas;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data: Ninja[] = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};
