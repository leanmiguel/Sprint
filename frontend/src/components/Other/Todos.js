import React, { useState } from "react"
import Todo from "./Todo"
import phTodos from "../json/todos"

const Todos = () => {
  const [todos, setTodos] = useState([...phTodos])

  return (
    <>
      <h1>Todos</h1>
      {todos.map(todo => (
        <Todo key={todo.title} data={todo} />
      ))}
    </>
  )
}

export default Todos
