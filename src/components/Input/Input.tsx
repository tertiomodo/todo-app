import { useState } from "react";
import styles from "./style.module.css";

interface Props {
  addTodo: (text: string) => void;
}

const Input: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>todos</h1>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAdd} className={styles.button}>
        Add
      </button>
    </div>
  );
};

export default Input;
