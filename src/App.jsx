import React, { useState } from 'react';

import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './Todolist/TodoList';


const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <AddTodoForm onAddTodo={(title) => setTodoList([...todoList, { id: Date.now(), title }])} />
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