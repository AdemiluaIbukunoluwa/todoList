// component to display tasks that have been set
import { useContext } from "react";
import "./tasks.component.css";
import { UserContext } from "../../context/tasks.context";

export const Tasks = () => {


  const deleteTask = (index) => {
      let toRemove = document.querySelector(`.${index}`)
      toRemove.remove() //deletes task from the list
  };

  const {allTasks} = useContext(UserContext)
  // add color picker for each task
  return (
    <div className="tasks">
      <h2>Things to do</h2>
      {allTasks.map((task) => {
        return (
          //set a classname to task + the index of this particular task so that we can access this exact task when we want to delete
          <div
            className={`task task${allTasks.indexOf(task)} col-xl-1`}
            key={allTasks.indexOf(task)}
          >
            <input type="checkbox" />
            <p className="task-text">{task}</p>
            <button
              className="delete"
              onClick={() => deleteTask(`task${allTasks.indexOf(task)}`)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
