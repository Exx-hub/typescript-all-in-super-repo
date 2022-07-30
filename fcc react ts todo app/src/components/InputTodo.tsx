import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import "../styles/InputTodo.css";
import { Task } from "../App";

interface InputTodoProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const InputTodo = ({ setTasks }: InputTodoProps) => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   setTasks((prev) => [
  //     ...prev,
  //     { title: input, id: uuidV4(), completed: false },
  //   ]);

  //   setInput("");
  // };

  // or use handleClick
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input) {
      setTasks((prev) => [
        ...prev,
        { title: input, id: uuidV4(), completed: false },
      ]);

      setInput("");
      inputRef.current?.blur();
    }
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Task"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit">GO</button>
    </form>
  );
};

export default InputTodo;
