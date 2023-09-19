import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = useState([])

  function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
      .then(res => res.json()) 
      .then(data => setTodos(data))
  }

  return (
    <div className="App">
      <Form />
      <TodoList />
      
    </div>
  );
}

export default App;
