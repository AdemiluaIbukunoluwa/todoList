import { useContext } from "react";
import "./task.styles.css";
import { TaskContext } from "../../context/tasks.context";

const Task = ({ task, color, id }) => {

  // id is the key for the item in the list
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="task col-md-1" style={{backgroundColor: color}} >
      <input type="checkbox"/>
      <p>{task}</p>
      {/* delete task takes the key parameter so that it can delete the task with that key */}
      <button className="deleteTask" onClick={() => deleteTask(id)}></button>
    </div>
  
  );
};

export default Task;
