import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now() 
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input 
        type="text" 
        name="title" 
        value={todoTitle} 
        onChange={handleTitleChange} 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;


// function AddTodoForm({ onAddTodo }) {
//     const [todoTitle, setTodoTitle] = useState("");
  
//     const handleTitleChange = (e) => {
//       const newTodoTitle = e.target.value;
//       setTodoTitle(newTodoTitle);
//     };
  
//     const handleAddTodo = () => {
//       onAddTodo(todoTitle);
//       setTodoTitle("");
//     };
  
//     return (
//       <div>
//         <form>
//           <label htmlFor="todoTitle">Title</label>
//           <input
//             type="text"
//             id="todoTitle"
//             value={todoTitle}
//             onChange={handleTitleChange}
//           />
//           <button type="button" onClick={handleAddTodo}>Add Todo</button>
//         </form>
//       </div>
//     );
//   }
  
//   export default AddTodoForm;

{/* <button type="submit">Add</button> */}