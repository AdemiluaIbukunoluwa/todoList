import "./App.css";
import AddTask from "./components/add tasks/addtask.component";
import Tasks from "./components/tasks/tasks.component";

function App() {
  return (
    <div className="App text-center">
      <h1 className="heading">My to-do List</h1>
      <div className="components"> 
        <AddTask/>
        <Tasks/>
      </div>
    </div>
  );
}

export default App;
