import React from "react";

export default function AddTodo({ todoText, handleChange, handleClick }) {
  return (
    <React.Fragment>
        <div id="myDIV" className="header">
            <h2 style={{margin:'5px'}}>My To Do List</h2>
            <input type="text" id="myInput" placeholder="Title..." value={todoText} onChange={handleChange} />
            <span className="addBtn" onClick={handleClick}>Add</span>
        </div>
    </React.Fragment>
  );
}
