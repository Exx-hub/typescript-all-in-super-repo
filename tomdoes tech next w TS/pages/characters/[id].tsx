import { GetServerSideProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import Layout from "../../components/Layout";
import { imageLoader } from "../../imageLoader";
import { Character } from "../../types";

interface CharacterByIdProps {
  character: Character;
}

const CharacterById = ({ character }: CharacterByIdProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{character.name}</h1>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
    </div>
  );
};

CharacterById.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export default CharacterById;

interface IQeury extends ParsedUrlQuery {
  id: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query as IQeury;
  console.log(context.query);
  console.log(context.params);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character: Character = await response.json(); // important to type the data from api

  return {
    props: {
      character,
    },
  };
};
