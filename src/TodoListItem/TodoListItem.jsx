import React from 'react';

function TodoListItem(props) {
  const { todo } = props;
  return (
    <div className="todo-item">
      <li>{todo.text}</li>
      {/* <input type="checkbox" checked={props.todo.completed} />
      <span className={props.todo.completed ? 'completed' : ''}>{props.todo.text}</span> */}
    </div>
  );
}

export default TodoListItem;