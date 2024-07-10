import AddTask from "../../components/add tasks/addtask.component";
import Tasks from "../../components/tasks/tasks.component";

const Home = () => {
    return (
        <div className="App bg-blue-200">
          <AddTask/>
          <Tasks/>
      </div>
    )
}

export default Home