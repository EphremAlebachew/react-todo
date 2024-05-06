// import React, { useState } from 'react';
// import TodoList1 from './TodoList1/TodoList1';

// const App = () => {
//   const [todoList, setTodoList] = useState([
//     { id: 1, text: 'Example Todo 1' },
//     { id: 2, text: 'Example Todo 2' },
//     { id: 3, text: 'Example Todo 3' },
//   ]);

//   const removeTodo = (id) => {
//     setTodoList(todoList.filter(todo => todo.id !== id));
//   };

//   return (
//     <div>
//       <h1>To-Do Application with Remove Buttons</h1>
//       <TodoList1 todoList={todoList} onRemoveTodo={removeTodo} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import AddTodoForm from './AddTodoForm/AddTodoForm';

import TodoList1 from './TodoList1/TodoList1';

// Custom hook for semi-persistent state
function useSemiPersistentState(key, initialState) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function App() {
  // Using the custom hook
  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', []);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList1 todos={todoList} />
    </div>
  );
}

export default App;