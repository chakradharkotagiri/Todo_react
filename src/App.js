import "./App.css";
import Header from "./My components/Header";
import Todos from "./My components/Todos";
import Footer from "./My components/Footer";
import Addtodo from "./Addtodo";
import { useState } from "react";


function App() {
 
  const [todos, setTodos] = useState([]);

  const onDelete = (todo) => {
    console.log("I am on delete of todo =>", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    const newObject = {
      sno: todos.length === 0 ? 1 : todos.length + 1,
      title,
      desc,
    };

    let newTodos =[...todos,newObject]

    setTodos(newTodos); 

  };

  return (
    <>
      <Header searchbar={true} title="Todo" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
