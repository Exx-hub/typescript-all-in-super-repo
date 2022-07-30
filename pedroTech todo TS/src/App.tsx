import { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./interfaces/interfaces";
import { v4 as uuidV4 } from "uuid";
import TodoItem from "./components/TodoItem";

const App: FC = () => {
  const [ input, setInput ] = useState<string>("");
  const [ deadline, setDeadline ] = useState<number>(0);
  const [ tasks, setTasks ] = useState<ITask[]>([]);

  console.log(tasks);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "input") {
      setInput(e.target.value);
    } else {
      setDeadline(+e.target.value);
    }
  };

  const addTodo = (): void => {
    setTasks([
      ...tasks,
      { title: input, deadline, completed: false, id: uuidV4() },
    ]);
    setInput("");
    setDeadline(0);
  };

  const toggleCompleted = (id: string): void => {
    let mapped = tasks.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item
    })

    setTasks(mapped)
  }

  const deleteItem = (id: string): void => {
    let filtered = tasks.filter(item => item.id !== id)

    setTasks(filtered)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-div">
          <input
            value={input}
            onChange={handleChange}
            type="text"
            placeholder="Task..."
            name="input"
          />
          <input
            value={deadline}
            onChange={handleChange}
            type="number"
            placeholder="Deadline (days)"
            name="deadline"
          />
        </div>
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="todoList">
        <ul>
          {tasks.map((task: ITask) => (
            <div key={task.id}>
              <TodoItem task={task} toggle={toggleCompleted} delete={deleteItem} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
