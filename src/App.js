import { useState } from "react";
import { Tasks } from "./components/tasks/tasks.component";
import "./App.css";
import { AddTask } from "./components/add tasks/addtask.component";

function App() {

  return(
    <div className="App">
        <h1 className="heading">My to-do List</h1>
    <AddTask/>
      <Tasks />
      {/*will remove parameter after adding context */}
    </div>
  );
}

export default App;
