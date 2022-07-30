import { Task } from "../App";
import { FaTrash, FaCheck, FaPen, FaChevronLeft } from "react-icons/fa";
import "../styles/TodoItem.css";
import { ChangeEvent, useState } from "react";

interface ITodoItemProps {
  item: Task;
  deleteTask: (id: string) => void;
  toggle: (id: string) => void;
  editTask: (id: string, newTitle: string) => void;
}

function TodoItem({ item, toggle, deleteTask, editTask }: ITodoItemProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editInput, setEditInput] = useState<string>(item.title);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditInput(e.target.value);
  };

  const confirmEdit = (id: string, title: string) => {
    editTask(id, title);
    setIsEdit(false);
  };

  return (
    <li className={item.completed ? "todo-item completed" : "todo-item"}>
      <div className="todo-title-div">
        {isEdit ? (
          <>
            <input type="text" value={editInput} onChange={handleChange} />
            <button onClick={() => confirmEdit(item.id, editInput)}>
              Confirm
            </button>
          </>
        ) : (
          <h4>{item.title}</h4>
        )}
      </div>
      <div>
        <span onClick={() => setIsEdit(true)}>
          <FaPen />
        </span>

        <span onClick={() => toggle(item.id)}>
          {item.completed ? <FaChevronLeft /> : <FaCheck />}
        </span>
        <span onClick={() => deleteTask(item.id)}>
          <FaTrash />
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
