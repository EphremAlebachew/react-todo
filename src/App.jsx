import React, { useState } from 'react';
import TodoList1 from './TodoList1/TodoList1';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Example Todo 1' },
    { id: 2, text: 'Example Todo 2' },
    { id: 3, text: 'Example Todo 3' },
  ]);

  const removeTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>To-Do Application with Remove Buttons</h1>
      <TodoList1 todoList={todoList} onRemoveTodo={removeTodo} />
    </div>
  );
};

export default App;