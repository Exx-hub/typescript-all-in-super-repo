import { FC, useContext } from "react";
import { AppContext } from "../App";

interface AnimalProps {
  name: string;
  species: string;
  breed: string;
  ageInMonths: number;
  hobbies: {
    morning: string;
    afternoon: string;
    evening: string;
  };
  faveFood: string[];
}

const Animal: FC<AnimalProps> = ({ name, species, breed, ageInMonths }) => {
  const appContext = useContext(AppContext);
  console.log(appContext);
  return (
    <div>
      <h2>
        {name}, {species}, {breed}, {ageInMonths}
      </h2>
    </div>
  );
};

export default Animal;
