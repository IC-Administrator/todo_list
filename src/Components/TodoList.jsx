import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);                      //  Initialises "todos" state representing an array of todo items with an empty array
  const [headingInput, setHeadingInput] = useState(' ');       //  Initialises "headingInput" state representing the value entered by user into input field for adding a new heading for a todo item, initialised as an empty string
  const [listInputs, setListInputs] = useState({});            //  Initialises "listInputs" state as an empty object {}.  This state will hold the values of input fields for each todo item individually.
  
  const handleAddTodo = () => {                                //  Declares a constant named handleAddTodo and assigns it an arrow function.
    if (headingInput.trim() !== '') {                          //  If the condition in the if statement is met, this line updates the state variable todos. It spreads the existing todos array (todos) into a new array using the spread syntax (…todos) and appends a new object to it. The new object contains a heading property set to the value of headingInput and a lists property initialized as an empty array.
      setTodos([...todos, { heading: headingInput, lists: [] }]);
      setHeadingInput('');                                     //  After adding a new todo item, this line clears the headingInput state variable, resetting the text input field for the user to enter a new todo item heading.
    }
  };

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() !== '') {
        const newTodos = [...todos];
        newTodos[index].lists.push(listInputs[index]);
        setTodos(newTodos);
        setListInputs({ ...listInputs, [index]: '' });
    }
  };

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };
  
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} //  Add onChange event handler to update headingInput state
            
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        {todos.map((todo, index) => (
          <div key={index} classname="todo-card">
            <div classname="heading_todo">
              <h3>{todo.heading}</h3> {/*display the heading here */}
              <button className="delete-button-heading" onClick={handleDeleteTodo}>Delete Heading</button>
            </div>
            <ul>
             {todo.lists.map((list, listIndex) => (
               <li key={listIndex} className='todo_inside_list'>
                <p>{list}</p>
               </li>
             ))}
           </ul>
            <div className='add_list'>
              <input
                type="text"
                className="list-input"
                placeholder="Add List"
                value={listInputs[index] || ''}
               onChange={(e) => handleListInputChange(index, e.target.value)}/>
              <button className="add-list-button" onClick={() => handleAddList(index)}>Add List</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
