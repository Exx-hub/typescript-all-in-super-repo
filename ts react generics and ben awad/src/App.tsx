import { createContext, FC, useState } from "react";
import "./App.css";
import Person, { HairColor } from "./components/Person";
import Animal from "./components/Animal";
import { faveFood, hobbies } from "./utils/utils";
import Generics from "./components/Generics";
import BasicGenerics from "./components/BasicGenerics";
import BenAwadGenerics from "./components/BenAwadGenerics";

interface ContextValueInterface {
  name: string;
  age: number;
  country: string;
}

interface AppContextInterface {
  contextValue: ContextValueInterface;
  setContextValue?: React.Dispatch<React.SetStateAction<ContextValueInterface>>;
}

export const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const [contextValue, setContextValue] = useState<ContextValueInterface>({
    name: "Avlin",
    age: 35,
    country: "PH",
  });
  return (
    <>
      {/* <AppContext.Provider value={{ contextValue, setContextValue }}> */}
      <div className="App">
        {/* <Generics /> */}

        {/* <BasicGenerics /> */}

        <BenAwadGenerics name="alvin" />

        {/* <Person
            name="Alvin"
            age={35}
            email="alvinfloresacosta@gmail.com"
            hairColor={HairColor.Blonde}
          /> */}
        {/* <Person
        name="Meg"
        age={33}
        email="meggyreyes@gmail.com"
        occupation="nurse"
        />
        <Animal
        name="Coco"
        species="Feline"
        breed="Persian"
        ageInMonths={10}
        hobbies={hobbies}
        faveFood={faveFood}
      /> */}
      </div>
      {/* </AppContext.Provider>
      <Animal
        name="Coco"
        species="Feline"
        breed="Persian"
        ageInMonths={10}
        hobbies={hobbies}
        faveFood={faveFood}
      /> */}
    </>
  );
};

export default App;
