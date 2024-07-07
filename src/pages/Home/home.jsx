import AddTask from "../../components/add tasks/addtask.component";
import Heading from "../../components/heading/heading";
import Tasks from "../../components/tasks/tasks.component";

const Home = () => {
    return (
        <div className="App bg-blue-200">
        <Heading/>
          <AddTask/>
          <Tasks/>
      </div>
    )
}

export default Home