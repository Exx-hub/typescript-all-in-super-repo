import Image from "next/image";
import Link from "next/link";
import { imageLoader } from "../imageLoader";
import { Character } from "../types";

interface CharacterItemProps {
  character: Character;
}

const CharacterItem = ({ character }: CharacterItemProps) => {
  return (
    <li>
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        width={200}
        height={200}
        alt={character.name}
      />
      <Link href={`/characters/${character.id}`}>
        <a>
          <h1>{character.name}</h1>
        </a>
      </Link>
    </li>
  );
};

export default CharacterItem;
