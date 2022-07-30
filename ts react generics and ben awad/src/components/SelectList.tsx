import * as React from "react";
import { Bear, Kitten } from "./Generics";

// type BearOrKitten = Bear | Kitten

// export interface ISelectListProps {
//   items: BearOrKitten[];
//   getImageUrl: (animal: BearOrKitten) => string;
//   getLabel: (animal: BearOrKitten) => string;
//   onSelect: React.Dispatch<React.SetStateAction<BearOrKitten | undefined>>;
//   selected?: BearOrKitten;
// }

// problem above is my functions / props need to accept different property names, one for bear and another for cat.
// creates more of a problem if additional arrays are included like a dog array. that makes it harder because you
// need to expect props for dogs as well.

// this is where generics come in. create a function that accepts generic/ dynamic parameters.
// much like function parameters or function component props. can be dynamic.

// T is a type parameter === generic
// the generic type T extends an id: string. so all generic items passed should have an id property that is a string
// enforced. any object we pass to this interface must have an id: string
export interface ISelectListProps<PropType extends { id: string }> { //sets the Generic Rule
  items: PropType[]; // this is basically an array of anything but must comply with our T definition (id:string)
  getImageUrl: (animal: PropType) => string; // so this function takes in a T object and returns a string
  getLabel: (animal: PropType) => string; // so this function takes in a T object and returns a string
  onSelect: (animal: PropType) => void; // so this function takes in a T object and returns nothing
  selected?: PropType; // a T object (id: string)
}



function SelectList<ParamType extends { id: string }>({ // sets what props Type the component accepts?
  items,
  getImageUrl,
  getLabel,
  onSelect,
  selected,
}: ISelectListProps<ParamType>) { // type annotation for the props
  return (
    <ul>
      {items.map((item) => (
        <li id={item.id} key={item.id} onClick={() => onSelect(item)}>
          <img
            src={getImageUrl(item)}
            alt={getLabel(item)}
            className={selected?.id === item.id ? "selected" : ""}
          />
          <span>{getLabel(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default SelectList;
