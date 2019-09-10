import React, { useState } from 'react';
import './App.css';

function App() {

  const initialRoles = { Title: "", Name: "", Email: "" }
  const [newLogin, setNewLogin] = useState(initialRoles);

  const handleChange = event => {
    setNewLogin({
      ...newLogin,
      [event.target.name]: event.target.value
    });
  };

  const resetForm = event => {
    setNewLogin(initialRoles);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(newLogin);
    resetForm();
  };

  return (
    <div className="App">
      <form onSubmit={function(event){handleSubmit(event); resetForm(event);}}>
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
    </div>
  );
}

export default App;
