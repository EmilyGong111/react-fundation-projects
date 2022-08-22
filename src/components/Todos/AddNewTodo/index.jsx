import React, { useState } from 'react'
import { nanoid } from 'nanoid'

const AddNewTodo = ({addTodo}) => {
  const [newTodo, setNewTodo] = useState("")
  const handleChange = (value) => {
    setNewTodo(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const todoObj = {id: nanoid(), name: newTodo, done: false}
    addTodo(todoObj)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={newTodo}
      onChange={e => handleChange(e.target.value)}
      />
      <button type="submit">Add New</button>
    </form>
  )
}
export default AddNewTodo
