import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
const TodoList = (props) => {
  const { todoList } = props;

  return (
    <ul>
      {todoList.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

// const List = [
//     { id: 1 ,title:"Complete assignment 1"},
//     { id: 2, title:" react 1" },
//     { id: 3,title:" ass-1" },
// ];

{/* {List.map(list => (
          <li key={list.id}>{list.title}</li> */}
          {/*         
          {props.todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
         */}
        
      