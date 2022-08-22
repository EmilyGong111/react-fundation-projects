import React from 'react'

export const TodoItem = ({todo, checkTodo, deleteTodo}) => {
  return (
    <li>
      <span style={{color: todo.done? "#ccc" : "#000" }}>{todo.name}</span>
      <button onClick={() => checkTodo(todo.id)}>Check</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}
