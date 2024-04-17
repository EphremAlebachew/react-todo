import React from 'react';
import TodoListItem1 from '../TodoListItem1/TodoListItem1';

const TodoList1 = ({ todoList, onRemoveTodo }) => (
  <ul>
    {todoList.map(todo => (
      <TodoListItem1 key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
  </ul>
);

export default TodoList1;
