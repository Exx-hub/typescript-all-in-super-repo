import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import CharacterItem from "../components/CharacterItem";
import styles from "../styles/Home.module.css";
import { Character, GetCharacterResults } from "../types";

interface HomeProps {
  characters: Character[];
}

// NextPage<{characters: Array<Character>}> -- or like this
const Home: NextPage<HomeProps> = ({ characters }) => {
  console.log(characters);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul>
        {characters.map((char) => (
          <CharacterItem key={char.id} character={char} />
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data: GetCharacterResults = await response.json();

  const { results } = data;

  return {
    props: {
      characters: results,
    },
  };
};

export default Home;
