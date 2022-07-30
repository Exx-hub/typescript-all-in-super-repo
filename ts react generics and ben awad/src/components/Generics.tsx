import { useState } from "react";
import SelectList from "./SelectList";

export interface Bear {
  id: string;
  name: string;
  imageUrl: string;
}

const bears: Bear[] = Array.from({ length: 4 }).map((_, index) => ({
  id: `${index}`,
  imageUrl: "https://placebear.com/300/200",
  name: `Bear ${index}`,
}));

export interface Kitten {
  id: string;
  cuteName: string;
  cutePic: string;
}

const kittens: Kitten[] = Array.from({ length: 4 }).map((_, index) => ({
  id: `${index}`,
  cuteName: `Kitten ${index}`,
  cutePic: `https://placekitten.com/300/200`,
}));

export interface Dog {
    id: string
    cuteName: string;
    cutePic: string;
  }

  const dogs: Dog[] = Array.from({ length: 4 }).map((_, index) => ({
    id: `${index}`,
    cuteName: `Dog ${index}`,
    cutePic: `https://placekitten.com/300/200`,
  }));

function Generics() {
  const [selectedBear, setSelectedBear] = useState<Bear | undefined>();
  const [selectedKitten, setSelectedKitten] = useState<Kitten | undefined>();
  return (
    <div className="container">
      <h2>Select Bear</h2>
      <SelectList
        items={bears}
        getImageUrl={(bear) => bear.imageUrl}
        getLabel={(bear) => bear.name}
        onSelect={setSelectedBear}
        selected={selectedBear}
      />

      <h2>Select Kitten</h2>
      <SelectList
        items={kittens}
        getImageUrl={(kitten) => kitten.cutePic}
        getLabel={(kitten) => kitten.cuteName}
        onSelect={setSelectedKitten}
        selected={selectedKitten}
      />
       <h2>Select Dogs</h2>
      <SelectList
        items={dogs}
        getImageUrl={(dog) => dog.cutePic}
        getLabel={(dog) => dog.cuteName}
        onSelect={setSelectedKitten}
        selected={selectedKitten}
      />
    </div>
  );
}
export default Generics;
