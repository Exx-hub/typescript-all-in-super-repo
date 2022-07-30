import { useState } from "react";
import { User } from "../interfaces/interfaces";

interface IBasicStateProps {}

// interface User {
//     name: string;
//     age: number;
//     country: string;
//     address: {
//       street: string;
//       number: number;
//       zip: string;
//     };
//     isAdmin: boolean;
//   }

// instead of nesting an address object type into another object, make another interface for address

// interface Address {
//   street: string;
//   number: number;
//   zip: string;
// }

// interface User {
//   name: string;
//   age: number;
//   country: string;
//   address: Address;
//   isAdmin: boolean;
// }

export function BasicState(props: IBasicStateProps) {
  const [animal, setAnimal] = useState(true); // type inference
  const [user, setUser] = useState<User | null>(null); // type annotation -- also this is a union type

  const fetchUser = () =>
    setUser({
      name: "alvin",
      age: 35,
      country: "PH",
      address: {
        street: "Falcon",
        number: 21,
        zip: "1118",
      },
      isAdmin: true,
    });

  return (
    <div>
      {user && <p>{`Welcome ${user.name}`}</p>}
      <button onClick={fetchUser}>Fetch user on click</button>
    </div>
  );
}
