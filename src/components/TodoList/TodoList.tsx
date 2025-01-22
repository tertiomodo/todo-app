import styles from "./style.module.css";
import Todo from "../../types";

interface Props {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul className={styles.container}>
      {todos.map((todo, index) => (
        <li
          key={todo.id}
          className={`${styles.list} ${index === 0 ? styles.firstList : ""}`}
        >
          <div className={styles.ckeckboxWrapper}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className={styles.input}
            />
            <div className={styles.checkbox}></div>
          </div>
          <span
            className={`${styles.text} ${todo.completed ? styles.done : ""}`}
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
