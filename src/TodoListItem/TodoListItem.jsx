import React from 'react';

function TodoListItem({ todo }) {
  // const { todo } = props;
  return (
    <div className="todo-item">
      <li>{todo.title}</li>
    </div>
  );
}

export default TodoListItem;

 {/* <input type="checkbox" checked={props.todo.completed} />
      <span className={props.todo.completed ? 'completed' : ''}>{props.todo.text}</span> */}