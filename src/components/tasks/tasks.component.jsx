import { useContext } from "react";
import "./tasks.style.css";
import { TaskContext } from "../../context/tasks.context";
import Task from "../task/task.component";


const Tasks = () => {
  const { allTasks } = useContext(TaskContext);
  return (
    <div className="tasks col-6">
     <h3>Things to do</h3>

      <div className="tasklist">
        {
          allTasks.map((taskObj) => {
          /* key will be an identifier for that particular task and is the index of the task in the task list*/
          const key = allTasks.indexOf(taskObj);
          return (
            /*created id as a seperate prop because key cannot be used as a prop */
            <Task key={key} task={taskObj} id={key}/>        
          );
        })}
      </div>
    </div>
  );
};
export default Tasks;
