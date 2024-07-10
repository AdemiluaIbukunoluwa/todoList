import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";
import Task from "../task/task.component";


const Tasks = () => {
  const { allTasks } = useContext(TaskContext);
  return (
    <div className="tasks ">
     <p className="logo text-3xl text-center mb-6">Tasks</p>
      <div className="tasklist bg-blue-100 lg:w-1/2  h-96 mx-auto mb-16 overflow-y-scroll">
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
