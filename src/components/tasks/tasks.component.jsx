// component to display tasks that have been set
import { useContext } from "react";
import "./tasks.style.css";
import { UserContext } from "../../context/tasks.context";

export const Tasks = () => {
  const deleteTask = (index) => {
    let toRemove = document.querySelector(`.${index}`);
    toRemove.remove(); //deletes task from the list
  };

  const { allTasks } = useContext(UserContext);
  // add color picker for each task
   const changeColor = (val) => {
    console.log(val)
   }
  return (
    <div className="tasks">
      {/* <h2 className="">Things to do</h2> */}
      {allTasks.map((task) => {
        return (
          //set a classname to task + the index of this particular task so that we can access this exact task when we want to delete
          <div
            className={`task task${allTasks.indexOf(task)} col-xxl-1 mx-3`}
            key={allTasks.indexOf(task)}>
            <p>
              <input type="checkbox" />
            </p>
            <p className="task-text">{task}</p>
            <button
              title="Delete Task"
              className="delete"
              onClick={() => deleteTask(`task${allTasks.indexOf(task)}`)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
