import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { get } from "./api/helpers";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  useEffect(() => {
    async function getData() {
      const res = await get("listing", {});
    }
    getData();
  }, []);

  return (
    <div className="container">
      <AddTodo todoText={todoText} handleChange={handleChange} />
      <TodoList list={todoList} />
    </div>
  );
}
