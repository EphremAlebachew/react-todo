import React from 'react'
const List = [
    { id: 1 ,title:"Complete assignment 1"},
    { id: 2, title:" react 1" },
    { id: 3,title:" ass-1" },
];
const greetings = "Good morning";
  
 function TodoList() {
  return (
    <div>
      <h1>{greetings}, Mr Frank</h1>
      <ul>
        {List.map(list => (
          <li key={list.id}>{list.title}</li>
         
        ))}
        
      </ul>
    </div>
  )
}
export default TodoList;