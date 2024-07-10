import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";
import {Delete, Edit} from '@mui/icons-material';

const Task = ({ task, id }) => {
  // id is the key for the item in the list
  const { deleteTask, editTask, allTasks, setAllTasks } =
    useContext(TaskContext);
  const { text, time, done } = task;

  const completeTask = () => {
    const tasks = [...allTasks];
    tasks[id] = { ...task, done: !done };
    setAllTasks(tasks);
  };
  return (
      <div className="flex rounded px-4 py-2 border border-black mx-4 my-3 text-design"   style={
        done
          ? {opacity: 0.5}
          : {opacity: 1}
      }>
        <input type="checkbox" onClick={completeTask} className="mr-2 w-5" />
        <p
          style={
            done
              ? {textDecoration: "line-through" }
              : {}
          }
        >
          {text}
        </p>
        <div className="ml-auto flex">
        <span className="timevalue mr-6 opacity-50 text-sm my-auto">{time}</span>
        {/* delete task takes the key parameter so that it can delete the task with that key */}
        <button className="editTask mr-3" onClick={() => editTask(task)}>
          <Edit/>
        </button>
        <button className="deleteTask" onClick={() => deleteTask(id)}><Delete/></button>
        </div>
      </div>
  );
};

export default Task;
