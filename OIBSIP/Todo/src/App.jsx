import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <FormTodo addTodo={addTodo} />
        <div className="todos">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
