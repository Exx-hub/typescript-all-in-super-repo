import { IGuest } from "../App";
import "../styles/GuestCard.css";

interface IGuestCardProps {
  guest: IGuest;
}

const GuestCard = ({ guest }: IGuestCardProps) => {
  return (
    <li className="guest-card-container">
      <div className="image-name-div">
        <img src={guest.image} alt="invited guest" />
        <h2>{guest.name}</h2>
      </div>
      <div className="age-div">{guest.age} years old</div>
      <div className="note-div">{guest.note}</div>
    </li>
  );
};
export default GuestCard;
