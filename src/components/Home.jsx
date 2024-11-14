import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Counter from './Counter';

const Home = ({ todo, setTodo, setSelectedTodo,urgent, setUrgent}) => {
    
    let [note,setNote]= useState('')
    const navigate = useNavigate();
    

    let typingWord = (e)=>{
        console.log('hello',e.target.value);
        setNote(e.target.value)
      }
      
    
      let clickedIcon = ()=>{
        if (note.trim() !== ''){
          setTodo([...todo,note])
          setUrgent([...urgent, false]);
          setNote('')
          console.log(urgent,'icon');
          
        }
      }


      

      const handleEdit = (item) => {
        console.log(item,'itemmmmmm');
        setSelectedTodo(item);
        navigate('/edit'); 
      };

      const toggleUrgent = (index) => {
        let newUrgent = [...urgent];
        newUrgent[index] = !newUrgent[index];
        console.log(newUrgent,'new urgent');
        setUrgent(newUrgent);
      };

      const handleDelete = (index) => {
        const newTodos = [...todo];
        const newUrgent = [...urgent];
        newTodos.splice(index, 1);
        newUrgent.splice(index, 1);
    
        setTodo(newTodos);
        setUrgent(newUrgent);
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
        { todo.map((item,index)=>{
          return(
            <div className="todo" key={index}>
          <div className="left">
            <input 
             type="checkbox"
             checked={urgent[index] || false}
             onChange={() => toggleUrgent(index)} />
            <p> {item}</p>
          </div>
          <div className="right">
              <i onClick={() => handleEdit(item)} className="fas fa-edit"></i>
              <i onClick={() => handleDelete(index)} style={{marginLeft:'10px'}} className="fas fa-trash"></i>
            </div>
        </div>
          )
        })}
        
      </div>
      {urgent.some((isUrgent) => isUrgent) && (
        <div className="urgentWork">
          <h2>Urgent Work</h2>
          <ul>
          
            {todo.map((item, index) => urgent[index] && <li key={index}>{item}</li>)}
          </ul>
        </div>
      )}

      <Counter/>

      
    </div>
  )
}

export default Home
