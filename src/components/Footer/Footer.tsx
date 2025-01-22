import styles from "./style.module.css";

interface Props {
  activeFilter: string;
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
  activeTodos: number;
}

const Footer: React.FC<Props> = ({
  activeFilter,
  setFilter,
  clearCompleted,
  activeTodos,
}) => (
  <div className={styles.container}>
    {activeTodos !== 0 && (
      <p className={styles.leftItems}>{activeTodos} items left</p>
    )}
    <div className={styles.buttons}>
      <button
        onClick={() => setFilter("all")}
        disabled={activeFilter === "all"}
        className={styles.button}
      >
        All
      </button>
      <button
        onClick={() => setFilter("active")}
        disabled={activeFilter === "active"}
        className={styles.button}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        disabled={activeFilter === "completed"}
        className={styles.button}
      >
        Completed
      </button>
      <button onClick={clearCompleted} className={styles.button}>
        Clear completed
      </button>
    </div>
  </div>
);

export default Footer;
