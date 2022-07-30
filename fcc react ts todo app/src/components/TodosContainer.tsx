import { Task } from "../App";
import TodoItem from "./TodoItem";
import "../styles/TodosContainer.css";

interface ITodosContainerProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

function TodosContainer({ tasks, setTasks }: ITodosContainerProps) {
  const handleDelete = (id: string): void => {
    let filtered = tasks.filter((item) => item.id !== id);

    setTasks(filtered);
  };

  const toggleCompleted = (id: string): void => {
    let mapped = tasks.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setTasks(mapped);
  };

  const handleEdit = (id: string, newTitle: string): void => {
    let mapped = tasks.map((item) => {
      if (item.id === id) item.title = newTitle;
      return item;
    });

    setTasks(mapped);
  };

  let activeTasks = tasks
    .filter((item) => !item.completed)
    .map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        toggle={toggleCompleted}
        deleteTask={handleDelete}
        editTask={handleEdit}
      />
    ));

  let completedTasks = tasks
    .filter((item) => item.completed)
    .map((item) => (
      <TodoItem
        key={item.id}
        item={item}
        toggle={toggleCompleted}
        deleteTask={handleDelete}
        editTask={handleEdit}
      />
    ));

  return (
    <div className="todos-container">
      <div className="todos">
        <h2>Active tasks ({activeTasks.length})</h2>
        <ul>{activeTasks}</ul>
      </div>
      <div className="todos">
        <h2>Completed Tasks ({completedTasks.length})</h2>
        <ul>{completedTasks}</ul>
      </div>
    </div>
  );
}

export default TodosContainer;
