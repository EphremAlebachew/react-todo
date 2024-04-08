import React from "react";
import TodoList from "./Todolist/TodoList";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
