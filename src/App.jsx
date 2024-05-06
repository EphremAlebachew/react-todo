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
// Filter out the todo item with the given id
// Update the state with the new todo list
/* Pass removeTodo as a prop */
import React, { useState } from 'react';
import TodoList1 from './TodoList1/TodoList1';
import AddTodoForm from './AddTodoForm/AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    
    const updatedTodoList = todoList.filter((todo, index) => index !== id);
    
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList1 todos={todoList} onRemoveTodo={removeTodo} /> 
    </div>
  );
}

export default App;