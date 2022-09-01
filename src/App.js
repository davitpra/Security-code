import React from "react";
import './App.css';
import { UseState } from "./UseState";
import { ClassState } from "./ClassState";
import { UseReducer } from "./UseReducer";

function App() {
  return (
    <div className="App">
      <UseState name ="UseState"/>
      <UseReducer name = "Use Reducer"/>
      <ClassState name = "Class State"/>
    </div>
  );
}

export default App;
