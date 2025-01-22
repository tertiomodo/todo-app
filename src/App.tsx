import { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";
import Todo from "./types";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="container">
      <Input addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
      <Footer
        activeFilter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
        activeTodos={activeTodos}
      />
    </div>
  );
};

export default App;
