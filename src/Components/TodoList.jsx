import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // initialises "todos" state representing an array of todo items with an empty array
  const [headingInput, setHeadingInput] = useState(' '); // initialises "headingInput" state representing the value entered by user into input field for adding a new heading for a todo item, initialised as an empty string
  const [listInputs, setListInputs] = useState({}); // initialises "listInputs" state as an empty object {}.  This state will hold the values of input fields for each todo item individually.
  
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            
          />
          <button className="add-list-button">Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
