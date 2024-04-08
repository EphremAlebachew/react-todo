import React from 'react'

const greetings = "Good morning";
  
 function TodoList(props) {
  return (
    <div>
      <h1>{greetings}, Frank</h1>
      <ul>
        
          {props.todoList.map(todo => (
            <li key={todo.id}>{todo.title}</li>
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