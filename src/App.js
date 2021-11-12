import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { get, post } from "./api/helpers";
import "./styles.css";

export default function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };
  const handleClick = () => {
     const form = new FormData()
     form.set('content', todoText)
     post("add", form).then(
         async (res)=> {
           if (res.data.status == 'success'){
              const res = await get("listing", {});
              console.log(res)
              setTodoList(res.data.data)
           }

         }
     )
  };
  useEffect(() => {
    async function getData() {
      const res = await get("listing", {});
      console.log(res)
      setTodoList(res.data.data)
    }
    getData();
  }, []);

  return (
    <div className="container">
      <AddTodo todoText={todoText} handleChange={handleChange} handleClick={handleClick} />
      <TodoList list={todoList} />
    </div>
  );
}
