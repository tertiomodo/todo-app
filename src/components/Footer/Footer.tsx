import styles from "./style.module.css";

interface Props {
  // activeFilter: string;
  onFilterChange: (filter: "all" | "active" | "completed") => void;
  onClearCompleted: () => void;
  activeTodos: number;
}

const Footer: React.FC<Props> = ({
  // activeFilter,
  onFilterChange,
  onClearCompleted,
  activeTodos,
}) => (
  <div className={styles.container}>
    {activeTodos !== 0 && <p>{activeTodos} items left</p>}
    <div className={styles.buttons}>
      <button onClick={() => onFilterChange("all")}>All</button>
      <button onClick={() => onFilterChange("active")}>Active</button>
      <button onClick={() => onFilterChange("completed")}>Completed</button>
      <button onClick={onClearCompleted}>Clear completed</button>
    </div>
  </div>
);

export default Footer;
