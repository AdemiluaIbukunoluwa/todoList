import { useState } from "react";
import { Tasks } from "./components/tasks/tasks.component";

function App() {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])



  const addTask = () => {
      allTasks.push(task)
      setAllTasks(allTasks)
      setTask("") //this allows the task to show immediately i click add(for some reason) :)
      //add code here to make the text in the input box to clear after adding the task
  }

  // to change the value of the current task
  //I'm using a function instead so i can add listener for when user clicks enter instead of add
  const InputBarListener = (event) => {
      setTask(event.target.value)
  }
  return (
    <div className="App">

      {/* can only create component for input when i add user context */}
      <div className="addNewTask">
        <input type="text" className="taskToAdd" onChange={(event) => InputBarListener(event)}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <Tasks taskList={allTasks}/> {/*will remove parameter after adding context */}
    </div>
  );
}

export default App;
