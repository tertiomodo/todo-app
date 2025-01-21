import { useState } from "react";
import Input from "./components/Input/Input";
// import TodoList from "./components/TodoList/TodoList";
// import Footer from "./components/Footer/Footer";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <>
      <h1>todos</h1>
      <Input onAdd={addTodo} />
      {/* <TodoList todos={filteredTodos} onToggle={toggleTodo} />
      <Footer
        activeFilter={filter}
        onFilterChange={setFilter}
        onClearCompleted={clearCompleted}
      /> */}
    </>
  );
};

export default App;
