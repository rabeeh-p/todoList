import React from 'react';
import {useState} from 'react'
import './App.css';

function App() {
  let [note,setNote]= useState([])
  let [todo,setTodo]  = useState([])

  let typingWord = (e)=>{
    console.log('hello',e.target.value);
    setNote(e.target.value)
  }

  let clickedIcon = ()=>{
    if (note.trim() !== ''){

      setTodo([...todo,note])
    }
  }
  console.log(todo,'todo');
  
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input onChange={typingWord}  type="text" placeholder="🖊️ Add item..." />
        <i onClick={clickedIcon} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {Array.isArray(todo) && todo.map((item,index)=>{
          return(
            <div className="todo" key={index}>
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p> {item}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>

          )
        })}
        
      </div>
    </div>
  );
}

export default App;