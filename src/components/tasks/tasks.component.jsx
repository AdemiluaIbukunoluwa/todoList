import { useContext } from "react";
import "./tasks.style.css";
import { TaskContext } from "../../context/tasks.context";
const Tasks = () => {
  const { allTasks } = useContext(TaskContext);

  const deleteTask = (index) => {
    const toRemove = document.querySelector(`.task${index}`);
    toRemove.remove()
  };
  return (
    <div className="tasks">
      <h3>Things to do</h3>

      <div className="tasklist">
        {allTasks.map((task) => {
          /* key will be an identifier for that particular task and is the index of the task in the task list*/
          const key = allTasks.indexOf(task);
          return (
            <div key={key} className={`task col-md-1 task${key}`}>
              <input type="checkbox" />
              <p>{task}</p>
              {/* delete task tales the key parameter so that it can delete the task with  that id */}
              <button
                className="deleteTask"
                onClick={() => deleteTask(key)}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Tasks;
