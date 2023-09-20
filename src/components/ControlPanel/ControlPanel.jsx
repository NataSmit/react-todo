import React from "react";
import styles from "./ControlPanel.module.scss";

export default function ControlPanel({
  filterActiveTodos,
  clearCompletedTodos,
  filterCompletedTodos,
  showAllTodos,
  todos,
  
}) {

  const activeTodos = todos.filter(todo => !todo.completed).length || 0

  return (
    <ul className={styles.controlPanel}>
      <li>
        {`${activeTodos} items left`}
      </li>
      <li>
        <button onClick={showAllTodos}>All</button>
      </li>
      <li>
        <button onClick={() => filterActiveTodos(todos)} >Active</button>
      </li>
      <li>
        <button onClick={() => filterCompletedTodos(todos)} >Completed</button>
      </li>
      <li>
        <button onClick={() => clearCompletedTodos(todos)} >Clear Completed</button>
      </li>
    </ul>
  );
}
