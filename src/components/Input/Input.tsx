import { useState } from "react";
import styles from "./style.module.css";

interface Props {
  onAdd: (text: string) => void;
}

const Input: React.FC<Props> = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim()) {
      onAdd(value);
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
      <h1>todos</h1>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Input;
