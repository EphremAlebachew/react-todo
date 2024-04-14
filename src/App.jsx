import React, {useEffect, useState } from 'react';
import TodoList from './Todolist/TodoList';
import AddTodoForm from './AddTodoForm/AddTodoForm';

const App = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const savedTodoList = localStorage.getItem('savedTodoList');
    if (savedTodoList) {
      setTodoList(JSON.parse(savedTodoList));
    }
  }, []);
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
     <h2>Todo List</h2>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
};

export default App;

{/* <React.Fragment>Hello react</React.Fragment>  */}
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