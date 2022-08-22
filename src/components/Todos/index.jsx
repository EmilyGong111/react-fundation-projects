import { useState } from "react"
import  AddNewTodo  from "./AddNewTodo"
// import FilterTodos from "./FilterTodos"
import TodoList from "./TodoList"
const data =[
    { id: '001', name: 'Eating', done: true },
    { id: '002', name: 'Drinking', done: true },
    { id: '003', name: 'Shopping', done: false }
  ]

const Todos = () => {
  const [todos, setTodos] = useState(data)

  const addTodo = (todoObj) => {
    const newTodos = [todoObj, ...todos]
    setTodos(newTodos)
  }
  const checkTodo = (todoId) => {
    const newTodos = todos.map(todo => {
     return todo.id === todoId? {...todo, done: !todo.done} : todo
    })
    setTodos(newTodos)
  }
  const deleteTodo = (todoId) => {
    const newTodos = todos.filter(todo => todo.id !==todoId)
    setTodos(newTodos)
  }

  return (
    <>
      <h3>Todos</h3>
      <AddNewTodo addTodo={addTodo}/>
      {/* <FilterTodos /> */}
      <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    </>
  )
}
export default Todos