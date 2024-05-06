import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) { // Destructuring the props
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now() // Generating a unique identifier
    };
    onAddTodo(newTodo); // Update the onAddTodo callback prop to pass an Object
    setTodoTitle(""); // Reset todoTitle state to an empty string
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input 
          type="text" 
          name="title" 
          value={todoTitle} 
          onChange={handleTitleChange} 
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
