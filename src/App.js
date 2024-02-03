import "./App.css";
import AddTask from "./components/add tasks/addtask.component";
import Tasks from "./components/tasks/tasks.component";

function App() {

  // const showAddTaskHandler = () => {
  //   setShowAddTask(!showAddTask)
  //   const addTaskDiv = document.querySelector('.addTask')
  //   const tasksDiv = document.querySelector('.tasks')

  //   if(showAddTask){
  //     addTaskDiv.style.display = 'block'
  //     tasksDiv.style.display = 'none'
  //   }else{
  //     addTaskDiv.style.display = 'none'
  //     tasksDiv.style.display = 'block'
  //   }
  // }

  return (
    <div className="App text-center">
      <h1 className="heading">My to-do List</h1>
      <div className="components container-fluid"> 
      {/* <button className="addButton" onClick={showAddTaskHandler}></button> */}
        <AddTask/>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
