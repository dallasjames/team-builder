import React from "react";

function Note(props) {
  return (
    <>
      {props.notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>Role: {note.title}</h2>
          <h2>Name: {note.name}</h2>
          <h2>Email: {note.email}</h2>
        </div>
      ))}
    </>
  );
}

export default Note;