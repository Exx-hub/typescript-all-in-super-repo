import "./App.css";
import BasicEnums from "./components/BasicEnums";
import BasicGenerics from "./components/BasicGenerics";
import BasicProps from "./components/BasicProps";
import { BasicState } from "./components/BasicState";
import BasicTypeNarrowing from "./components/BasicTypeNarrowing";
import ContextComponent from "./components/ContextComponent";
import FormAndEvents from "./components/FormAndEvents";
import { InputValueProvider } from "./context/InputValueContext";

interface AppProps {
  headerText: string;
  optionalHeaderText?: string;
  defaultText?: string;
}

export interface MyUser {
  id: number;
  name: string;
  age: number;
}

export interface MyOrder {
  id: number;
  quantity: number;
  amount: number;
}

const users: MyUser[] = [
  { id: 1, name: "John", age: 55 },
  { id: 2, name: "Alvin", age: 35 },
  { id: 3, name: "George", age: 45 },
];

const orders: MyOrder[] = [
  { id: 1, quantity: 5, amount: 75 },
  { id: 2, quantity: 10, amount: 70 },
  { id: 3, quantity: 15, amount: 95 },
];

interface ImageItem {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
}

interface QuoteItem {
  id: number;
  quote: string;
  type: string;
}

export type Item = ImageItem | QuoteItem;

const items: Item[] = [
  {
    id: 1,
    title: "A nice sunset",
    imageUrl:
      "https://images.unsplash.com/photo-1658696245841-b02a43dde1f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    type: "imageItem",
  },
  {
    id: 2,
    title: "random title",
    quote: "Lorem ipsum dolor",
    type: "quoteItem",
  },
];

function App() {
  return (
    <div className="App">
      {/* <BasicProps
        headerText="Header Text"
        optionalProp="optional naman ito"
        defaultProp="overwrite default"
      /> */}

      {/* <BasicState /> */}

      {/* <FormAndEvents /> */}

      {/* <InputValueProvider>
        <ContextComponent />
      </InputValueProvider> */}

      {/* <BasicEnums /> */}

      {/* <BasicGenerics items={users} /> */}
      {/* <br /> */}
      {/* <BasicGenerics items={orders} /> */}

      <BasicTypeNarrowing items={items} />
    </div>
  );
}

export default App;
