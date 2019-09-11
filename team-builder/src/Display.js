import React, { useState } from "react";
import Create from "./App";
import Note from "./Form";

function App() {
  const [notes, setNotes] = useState([
    {
      title: "",
      body: ""
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