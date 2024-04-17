import React, { useState } from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Title"
        value={todoTitle}
        onChange={handleTitleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;