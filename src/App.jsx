import React,{useState} from "react";
import TodoList from "./Todolist/TodoList";
import AddTodoForm from "./AddTodoForm/AddTodoForm";
function App() {
  const [todoList, setTodoList] = useState([]); 
  return (
    <div>
      <h1>Todo List</h1>

      <AddTodoForm />
      <TodoList  todoList={todoList}/>
    </div>
  );
}

export default App;
