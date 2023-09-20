import React from 'react'

export default function TodoItem({todo}) {


  return (
    <li>
      <input type='checkbox' checked={todo.completed} />
      <label>{todo.title}</label>
    </li>
  )
}
