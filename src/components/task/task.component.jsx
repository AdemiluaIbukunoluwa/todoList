import { useContext } from "react";
import "./task.styles.css";
import { TaskContext } from "../../context/tasks.context";

const Task = ({ task, id }) => {
  // id is the key for the item in the list
  const { deleteTask, editTask, allTasks, setAllTasks } =
    useContext(TaskContext);
  const { text, time, isChecked } = task;

  const completeTask = () => {
    const tasks = [...allTasks];
    tasks[id] = { ...task, isChecked: !isChecked };
    setAllTasks(tasks);
    console.log(allTasks);
  };
  return (
    <div>
      <div className="task col-md-1">
        <input type="checkbox" onClick={completeTask} />
        <p style={isChecked?{opacity: 0.5, textDecoration:'line-through'}: {opacity: 1}}>{text}</p>
        <span className="timevalue">{time}</span>
        {/* delete task takes the key parameter so that it can delete the task with that key */}
        <button className="editTask" onClick={() => editTask(task)}>Edit</button>
        <button className="deleteTask" onClick={() => deleteTask(id)}></button>
      </div>
    </div>
  );
};

export default Task;
