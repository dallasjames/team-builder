import React, { useState } from 'react';
import Note from './Form';
import './App.css';

function App() {

  const initialRoles = { Title: "", Name: "", Email: "" };
  const [newLogin, setNewLogin] = useState(initialRoles);
  
  const handleChange = event => {
    const { name, value } = event.target
    setNewLogin({...newLogin, [name]:value})
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    console.log(newLogin);
    Note();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        name="Title"
        onChange={handleChange}
      />
      
      <input
        type="text"
        placeholder="Name"
        name="Name"
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Email"
        name="Email"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
    <Note newLogin={newLogin}/>
    </div>
  );
}

export default App;