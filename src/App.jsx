import React from "react";
import "./App.css";
import Todolist from "./Components/Todolist";


function App() {
  return (<div className="App">
      <span className="title">Todo List</span> <br />
      <Todolist />
    </div>
  );
}

export default App;
