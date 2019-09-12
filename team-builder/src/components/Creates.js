import React, { useState } from "react";

const Create = props => {
  const initialNote = { title: "", name: "", email: "" };
  const [newNote, setNewNote] = useState(initialNote);

  const handleChange = event => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newNote.title || !newNote.name || !newNote.email) {
      alert("Please fill out all fields!");
    } else {
      props.setNotes([newNote, ...props.notes]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewNote(initialNote);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        value={newNote.title}
      />

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={newNote.name}
      />

      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={newNote.email}
      />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;