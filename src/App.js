import React, { useState, useRef } from "react";
import "./App.css";
import TodoBody from "./components/TodoBody";
import TodoHistory from "./components/TodoHistory";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [jinan, setJinan] = useState([]);

  const nextId = useRef(0);

  const insertHandler = (item, status, date) => {
    const newTodo = {
      id: nextId.current,
      date: date,
      text: item,
      status: status,
    };
    setTodos([...todos, newTodo]);
    nextId.current += 1;
  };

  const removeHandler = (targetId) =>
    setTodos(todos.filter((doo) => doo.id !== targetId));

  const updateHandler = (updated) => {
    // const testJunan = todos.filter((doo) => doo.id == updated.id);
    setJinan([...jinan, updated]);
    setTodos(todos.filter((doo) => doo.id !== updated.id));
  };

  const jiwarHandler = (targetId) =>
    setJinan(jinan.filter((dodo) => dodo.id !== targetId));

  return (
    <TodoBody>
      <TodoInsert plusItem={insertHandler} />
      <TodoList
        todos={todos}
        removeItem={removeHandler}
        updateItem={updateHandler}
      />
      <TodoHistory jinan={jinan} jiwarItem={jiwarHandler} />
    </TodoBody>
  );
};

export default App;
