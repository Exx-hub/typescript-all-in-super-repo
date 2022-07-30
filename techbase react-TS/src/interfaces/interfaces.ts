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

export interface Address {
  street: string;
  number: number;
  zip: string;
}

export interface User {
  name: string;
  age: number;
  country: string;
  address: Address;
  isAdmin: boolean;
}
