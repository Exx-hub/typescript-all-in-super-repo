import { IGuest } from "../App";
import GuestCard from "./GuestCard";

interface IGuestListProps {
  guests: IGuest[];
}

const GuestList: React.FC<IGuestListProps> = ({ guests }) => {
  const renderList = (): JSX.Element[] => {
    return guests.map((guest) => <GuestCard key={guest.id} guest={guest} />);
  };
  return <ul>{renderList()}</ul>;
};

export default GuestList;
