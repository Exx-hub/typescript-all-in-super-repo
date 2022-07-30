import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { IGuest } from "../App";

interface IAddGuestFormProps {
  guests: IGuest[];
  setGuests: React.Dispatch<React.SetStateAction<IGuest[]>>;
}

interface InputStateValues {
  name: string;
  age: number;
  image: string;
  note: string;
}

const AddGuestForm: React.FC<IAddGuestFormProps> = ({ guests, setGuests }) => {
  const [inputValues, setInputValues] = useState<InputStateValues>({
    name: "",
    age: 0,
    image: "",
    note: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInputValues({ ...inputValues, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { name, age, image, note } = inputValues;

    if (name && age && image) {
      setGuests([...guests, { name, age, image, note, id: uuidV4() }]);
      setInputValues({
        name: "",
        age: 0,
        image: "",
        note: "",
      });
    } else {
      alert("Details are required!");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={inputValues.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Age"
        value={inputValues.age}
        name="age"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={inputValues.image}
        name="image"
        onChange={handleChange}
      />
      <textarea
        placeholder="Note"
        value={inputValues.note}
        name="note"
        onChange={handleChange}
      />
      <button type="submit">Add To Party</button>
    </form>
  );
};

export default AddGuestForm;
