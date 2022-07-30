import { Item } from "../App";

interface IBasicTypeNarrowingProps {
  items: Item[];
}

function BasicTypeNarrowing({ items }: IBasicTypeNarrowingProps) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        if ("title" in item) {
          // in operator or use equality narrowing
          return (
            <li key={item.id}>
              {item.title && <h2>{item.title}</h2>}
              {item.imageUrl && <img src={item.imageUrl} alt={item.title} />}
            </li>
          );
        } else {
          return <li key={item.id}>{item.quote && <h2>{item.quote}</h2>}</li>;
        }
      })}
    </ul>
  );
}

export default BasicTypeNarrowing;
