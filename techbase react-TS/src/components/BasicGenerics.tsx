import * as React from "react";
import { MyOrder, MyUser } from "../App";

interface ItemArrayProps {
  items: MyUser[] | MyOrder[]; // this is okay for 2-3 kinds of item array. but becomes a problem for 10? 20?
}

interface Item {
  id: number;
}

// this is where you use generics
interface BasicGenericsProps<T> {
  items: T[];
}

function BasicGenerics<T extends Item>({ items }: BasicGenericsProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}

export default BasicGenerics;
