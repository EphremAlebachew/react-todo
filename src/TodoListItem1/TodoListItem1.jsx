// import React from 'react';

// const TodoListItem1 = ({ todo, onRemoveTodo }) => {
//   const handleRemoveClick = () => {
//     onRemoveTodo(todo.id);
//   };

//   return (
//     <li>
//       {todo && todo.text}
//       <button type="button" onClick={handleRemoveClick}>Remove</button>
//     </li>
//   );
// };

// export default TodoListItem1;
import React from 'react';

const TodoListItem1 = ({ todo }) => { // Destructuring the props
  return (
    <li>{todo.title}</li>
  );
}

export default TodoListItem1;