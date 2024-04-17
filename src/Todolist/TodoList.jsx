import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

  return (
    <div>
      {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemoveTodo} />
      ))}
    </div>
  );
};

export default TodoList;

