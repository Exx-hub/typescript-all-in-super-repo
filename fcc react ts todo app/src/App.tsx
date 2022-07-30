import { FC, useState } from "react";
import "./App.css";
import InputTodo from "./components/InputTodo";
import TodosContainer from "./components/TodosContainer";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // can also use <Array<Task>>
  console.log(tasks);

  return (
    <div className="App">
      <h1>TASKTIFY</h1>

      <InputTodo setTasks={setTasks} />

      <TodosContainer tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
