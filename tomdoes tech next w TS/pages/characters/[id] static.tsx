import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import { imageLoader } from "../../imageLoader";
import { Character, GetCharacterResults } from "../../types";

interface CharacterByIdProps {
  character: Character;
}

const CharacterById = ({ character }: CharacterByIdProps) => {
  console.log(character);
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

export default CharacterById;

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data: GetCharacterResults = await response.json(); // important to type the data from api

  const { results } = data;

  const paths = results.map((item: Character) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const character: Character = await response.json(); // important to type the data from api

  return {
    props: {
      character,
    },
    revalidate: 10,
  };
};
