import React, { useState } from "react";
import Create from "./Creates";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([
    {
      title: 'Frontend',
      name: 'Dallas James',
      email: 'dallasjames43@yahoo.com'
    }
  ]);

  return (
    <div className="App">
      <h1>My Notes</h1>

      <Create notes={notes} setNotes={setNotes} />
      <Note notes={notes} />
    </div>
  );
}

export default App;