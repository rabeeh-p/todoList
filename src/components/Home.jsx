import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({ todo, setTodo, setSelectedTodo }) => {
    
    let [note,setNote]= useState('')
    const navigate = useNavigate();

    let typingWord = (e)=>{
        console.log('hello',e.target.value);
        setNote(e.target.value)
      }
    
      let clickedIcon = ()=>{
        if (note.trim() !== ''){
          setTodo([...todo,note])
          setNote('')
        }
      }

      const handleEdit = (item) => {
        console.log(item,'itemmmmmm');
        
        setSelectedTodo(item);
        navigate('/edit'); 
      };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      
      <div className="input">
        <input onChange={typingWord}  type="text" placeholder=" Add note.." />
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
              <i onClick={() => handleEdit(item)} className="fas fa-edit"></i>
            </div>
        </div>

          )
        })}
        
      </div>
    </div>
  )
}

export default Home
