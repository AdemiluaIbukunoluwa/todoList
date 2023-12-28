import { useContext } from "react";
import "./task.styles.css";
import { TaskContext } from "../../context/tasks.context";

const Task = ({task, id}) => {

  // id is the key for the item in the list
  const { deleteTask, setCompletedTasksHandler, allTasks, editTask} = useContext(TaskContext);
  const {text, color, time} = task
  return (
    <div className="task col-md-1" style={{backgroundColor: color}}>
      <input type="checkbox"/>
      <p>{text}</p><span className="timevalue">{time}</span>
      {/* delete task takes the key parameter so that it can delete the task with that key */}
      <button className="deleteTask" onClick={() => deleteTask(id)}></button>
      <button className="editTask" onClick={() => editTask(task)}></button>
    </div>
  
  );
};

export default Task;
