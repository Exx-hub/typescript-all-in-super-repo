import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../App";

export enum HairColor {
  Blonde = "Blonde",
  Burgundy = "Burgundy",
  Brunette = "Brunette",
  SilverAsh = "Silver Ash",
}

interface PersonProps {
  name: string;
  age: number;
  email: string;
  occupation?: string; //optional
  hairColor?: HairColor;
}

// console.log(HairColor.SilverAsh);

type NickNameType = "Vin" | "Meg";

const Person = (props: PersonProps) => {
  const { name, age, email, hairColor } = props;

  const appContext = useContext(AppContext);
  console.log(appContext);

  const [country, setCountry] = useState<string>("");
  const [isPatriot, setIsPatriot] = useState<boolean>(false);

  const nickName: NickNameType = "Vin";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <h3>
        {name}, {age}, {email} - Nickname: {nickName}
      </h3>
      <input
        value={country}
        onChange={handleChange}
        // onChange={(e: ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
        placeholder="Write your Country name..."
      />

      <h1>Home Country: {country}</h1>
      <h1>Hair Color: {hairColor}</h1>
    </div>
  );
};

export default Person;
