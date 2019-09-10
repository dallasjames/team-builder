import React from "react";
import 

function App() {
  
    return (
      <div className="App">
        <h1>Users</h1>
  
        <Create notes={notes} setNotes={setNotes} />
        <Note notes={notes} />
      </div>
    );
  }
  
  export default App;