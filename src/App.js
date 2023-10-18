import { useState } from "react";
import { Tasks } from "./components/tasks/tasks.component";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = () => {
    if (task !== "") {
      allTasks.push(task);
      setAllTasks(allTasks);
      setTask(""); //this allows the task to show immediately i click add(for some reason) :)
      //add code here to make the text in the input box to clear after adding the task
      document.querySelector(".taskToAdd").value = "";
      hideInputBar()
    }
  };

  // to hide the input bar
  const hideInputBar = () => {
    //make input bar and hide button invincible
    let hide = document.querySelector(".hide")
    let input = document.querySelector(".addNewTask");
    input.style.display = "none";
    hide.style.display = "none"
  };
  // to change the value of the current task
  //I'm using a function instead so i can add listener for when user clicks enter instead of add
  // I'm planning to enable user to add a task when the click enter
  const InputBarListener = (event) => {
    setTask(event.target.value);
  };
  
  const displayAddTask = () => {
    let input = document.querySelector(".addNewTask");
    let hide = document.querySelector(".hide");
    input.style.display = "block";
    hide.style.display = "inline-block";
  };
  return (
    <div className="App">
      <h1 className="heading">My to-do List</h1>
      {/* add new task button */}
      <button className="displayAddTask" onClick={displayAddTask}>
        Add New Task
      </button>
      <button className="hide" onClick={hideInputBar}>Hide</button>
      {/* can only create a seperate component for input when i add user context */}
      <div className="addNewTask">
        <input
          type="text"
          className="taskToAdd"
          onChange={(event) => InputBarListener(event)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <Tasks taskList={allTasks} />
      {/*will remove parameter after adding context */}
    </div>
  );
}

export default App;
