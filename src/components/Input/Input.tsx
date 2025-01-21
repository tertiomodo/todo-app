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

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Input;
