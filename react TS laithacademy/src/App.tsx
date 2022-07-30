import { FC, useState } from "react";
import "./App.css";
import { v4 as uuidV4 } from "uuid";

import GuestList from "./components/GuestList";
import AddGuestForm from "./components/AddGuestForm";

export interface IGuest {
  name: string;
  age: number;
  image: string;
  note: string;
  id: string;
}

const App: FC = () => {
  const [guests, setGuests] = useState<IGuest[]>([
    {
      name: "LeBron James",
      age: 37,
      image: "https://cdn.nba.com/headshots/nba/latest/260x190/2544.png",
      note: "The GoaT",
      id: uuidV4(),
    },
  ]);
  console.log(guests);

  return (
    <div className="App">
      <h2>Party of the Century Guestlist:</h2>

      <GuestList guests={guests} />

      <AddGuestForm guests={guests} setGuests={setGuests} />
    </div>
  );
};

export default App;
