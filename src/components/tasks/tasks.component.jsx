import { useContext } from "react";
import "./tasks.style.css";
import { TaskContext } from "../../context/tasks.context";
const Tasks = () => {
  const { allTasks } = useContext(TaskContext);
  return (
    <div className="tasks">
      <h3>Things to do</h3>

      <div className="tasklist">
        {allTasks.map((task) => {
          return(
            <div key={allTasks.indexOf(task)} className="task col-md-1">
                <input type="checkbox"/>
                <p>{task}</p>
                <button className="deleteTask"></button>
            </div>
          ) 
        })}
      </div>

    </div>
  );
};
export default Tasks;
