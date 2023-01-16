import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { TODO, ITODO } from "./TODO";
import "./styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITODO[]>([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Learn TypeScript", done: false },
    { id: 3, text: "Learn React Hooks", done: false },
  ]);
  const [currentId, setCurrentId] = useState(4);

  const removeTodo = (index: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== index));
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const handleToggle = (index: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      })
    );
  };

  const addTodo = () => {
    if (!value) return;
    setTodos((prev) => {
      const newTodo = { id: currentId, text: value, done: false };
      return [newTodo, ...prev];
    });
    setValue("");
    setCurrentId(currentId + 1);
  };

  return (
    <div className="App">
      <a href="https://beta.reactjs.org/" target="_blank">
        <img src={reactLogo} className="logo" alt="React logo" />
      </a>
      <h1>TODO List</h1>
      <section className="adding-todo">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleEnter}
          type="text"
          placeholder="TODO"
        />
        <button onClick={() => addTodo()}>Add</button>
        <button onClick={() => setTodos([])}>Clear</button>
      </section>
      <section className="todo-count">
        TODOs remaining: {todos.filter((todo) => !todo.done).length}
      </section>
      <section className="list">
        {todos.map((todo) => (
          <TODO
            key={todo.id}
            todo={todo}
            onRemove={() => removeTodo(todo.id)}
            onDoneChange={() => {
              handleToggle(todo.id);
            }}
          />
        ))}
      </section>
    </div>
  );
}
export default App;
