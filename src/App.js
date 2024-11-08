import React from 'react';
import {useState} from 'react'
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Edit from './components/Edit';

function App() {
  const [todo, setTodo] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  
  console.log(todo,'todo');
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home todo={todo} setTodo={setTodo} setSelectedTodo={setSelectedTodo}/>}/>
        <Route path='/edit' element={<Edit todo={todo} setTodo={setTodo} selectedTodo={selectedTodo} />}/>
    
      </Routes>
    </Router>
    
  );
}

export default App;