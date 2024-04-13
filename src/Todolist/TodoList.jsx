import React from 'react'
import TodoListItem from "./TodoListItem/TodoListItem";
const greetings = "Good morning";
  
 function TodoList(props) {
  return (
    <div>
      <h1>{greetings}, Frank</h1>
      
      <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>

    </div>
  )
}
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
        
      