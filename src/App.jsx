import React, { useState } from 'react';
import TodoList from './Todolist/TodoList';
import AddTodoForm from './AddTodoForm/AddTodoForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;
// function App() {
//   const [todoList, setTodoList] = useState([]);

//   const handleAddTodo = (newTodoTitle) => {
//     const newTodo = { id: todoList.length + 1, title: newTodoTitle };
//     setTodoList([...todoList, newTodo]);
//   };

//   return (
//     <div>
      
//       <h1>Todo List</h1>

//       <AddTodoForm onAddTodo={handleAddTodo} />
//       <TodoList todoList={todoList} />
//     </div>
//   );
// }

// export default App;