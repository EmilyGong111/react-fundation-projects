import React from 'react'
import { TodoItem } from './TodoItem'


const TodoList = ({todos, checkTodo, deleteTodo}) => {
  // const {todos} = props
  return <ul>
    {todos.map(todo => 
     <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
    )}   
    </ul>   
}
export default TodoList