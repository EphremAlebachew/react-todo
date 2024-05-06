import React, { useState } from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';


const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleAddTodo = () => {
    if (todoTitle.trim()) {
      onAddTodo(todoTitle);
      setTodoTitle('');
    }
  };

  return (
    <div>
      <InputWithLabel
        label="Title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodoForm;
