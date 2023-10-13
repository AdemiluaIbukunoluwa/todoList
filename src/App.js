import { useState } from "react";

function App() {
  const [task, setTask] = useState('')
  const [allTasks, setAllTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const addTask = () => {
      allTasks.push(task)
      setAllTasks(allTasks)
      setTask("")
  }

  // to change the value of the current task
  const InputBarListener = (event) => {
      setTask(event.target.value)
  }
  return (
    <div className="App">

      <div className="addNewTask">
        <input type="text" className="addTask" onChange={(event) => InputBarListener(event)}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="tasks">
        {
          allTasks.map((task)=> {
            return (
              <p key={allTasks.indexOf(task)}>{task}</p>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
