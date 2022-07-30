import { ITask } from "../interfaces/interfaces";
import "./TodoItem.css";

//defines the type of the props object
interface TodoItemProps {
    // describes the types of the items inside the props object
    task: ITask;
    name?: string; // example only and optional
    toggle(id: string): void; // event handlers as props
    delete(id: string): void; // event handlers as props
}

const TodoItem = (props: TodoItemProps): any => {
    // can be destructed {task, name}: TodoItemProps

    const handleToggle = (id: string) => {
        props.toggle(id);
    };

    return (
        <li key={props.task.id} className="taskItem">
            <div
                style={{ textDecoration: props.task.completed ? "line-through" : "" }}
            >
                {props.task.title} - {props.task.deadline} days to finish
            </div>
            <div>
                <button onClick={() => handleToggle(props.task.id)}>Toggle</button>
                <button style={{ marginLeft: "10px" }} onClick={() => props.delete(props.task.id)}>X</button>
            </div>
        </li>
    );
};

export default TodoItem;
