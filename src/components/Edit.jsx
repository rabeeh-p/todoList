import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditPage({ todo, setTodo, selectedTodo }) {
  const [newNote, setNewNote] = useState(selectedTodo || '');
  const navigate = useNavigate();
  console.log(newNote,'neww');
  

  const handleSave = () => {
    const updatedTodos = todo.map((item) => (item === selectedTodo ? newNote : item));
    if (newNote.trim() === '') {
      let message = 'empty';
      alert(message); 
      return;
    }
    setTodo(updatedTodos);
    navigate('/'); 
  };

    return (
      <div className="edit-page">
        <h2>Edit Todo</h2>
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </div>
    );
}

export default EditPage;
