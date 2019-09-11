import React from "react";

function Note(props) {
  console.log(props);
  return (
    <div>
    <div className="person">
      <h1>Title</h1>
      <h1>Name</h1>
      <h1>Email</h1>
    </div>
    <div className="person">
      <h2>{props.newLogin.Title}</h2>
      <h2>{props.newLogin.Name}</h2>
      <h2>{props.newLogin.Email}</h2>
    </div>
    </div>
  );
}

export default Note;