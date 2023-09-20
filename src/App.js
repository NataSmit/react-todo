import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosToDisplay, setTodosToDisplay] = useState([])

  function fetchTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data)
        setTodosToDisplay(data)
      });
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  console.log(todos);

  function filterActiveTodos(todos) {
    const activeTodos = todos.filter((todo) => !todo.completed);
    setTodosToDisplay(activeTodos);
  }

  function filterCompletedTodos(todos) {
    const completedTodos = todos.filter((todo) => todo.completed);
    setTodosToDisplay(completedTodos);
  }

  function clearCompletedTodos(todos) {
    const completedTodos = todos.filter((todo) => todo.completed);
    const activeTodos = todos.filter((todo) => !todo.completed)
    completedTodos.forEach((todo) => {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: "DELETE",
      });
    });
    setTodosToDisplay(activeTodos)
  }

  function showAllTodos() {
    fetchTodos()
  }

  
  return (
    <div className="App">
      <Form />
      <TodoList todos={todosToDisplay} />
      <ControlPanel
        filterActiveTodos={filterActiveTodos}
        filterCompletedTodos={filterCompletedTodos}
        clearCompletedTodos={clearCompletedTodos}
        showAllTodos={showAllTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
