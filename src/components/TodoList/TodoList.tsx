import styles from "./style.module.css";

interface Props {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onToggle: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggle }) => (
  <ul className={styles.container}>
    {todos.map((todo) => (
      <li key={todo.id}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </li>
    ))}
  </ul>
);

export default TodoList;
