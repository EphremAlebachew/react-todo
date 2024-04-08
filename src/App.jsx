import React, { useState } from "react";
import TodoList from "./Todolist/TodoList";
import AddTodoForm from "./AddTodoForm/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = (newTodoTitle) => {
    const newTodo = { id: todoList.length + 1, title: newTodoTitle };
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;