
import React, { useState, useEffect } from 'react';
import TodoList1 from './TodoList1/TodoList1';
import AddTodoForm from './AddTodoForm/AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: { todoList: todoList } });
        }, 2000);
      });
    };

    fetchData().then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false); 
    });
  }, []); 
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]); 

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList1 todos={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}

export default App;