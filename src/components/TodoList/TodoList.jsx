import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

export default function TodoList({todos = []}) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}
