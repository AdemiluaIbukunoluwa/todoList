import "./App.css";
import AddTask from "./components/add tasks/addtask.component";
import Heading from "./components/heading/heading";
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
    <div className="App">
      <Heading/>
        <AddTask/>
        <Tasks/>
    </div>
  );
}

export default App;
