
import React from 'react';

const AddTodoForm = () => {
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log(todoTitle);
    event.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" />
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