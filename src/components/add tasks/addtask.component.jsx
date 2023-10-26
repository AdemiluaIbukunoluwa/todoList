import { useContext } from "react";
import "./addtask.styles.css";
import { TaskContext } from "../../context/tasks.context";

const AddTask = () => {
  const { setTaskColor, setCurrentTask, currentTask, setAllTasks, allTasks } =
    useContext(TaskContext);

  const AddNewTask = () => {
    if (currentTask !== "") {
      allTasks.push(currentTask);
      setAllTasks(allTasks);
      setCurrentTask(""); //this allows the task to show immediately i click add(for some reason) :)
      //add code here to make the text in the input box to clear after adding the task
      document.querySelector(".taskToAdd").value = "";
    }
    console.log(allTasks);
  };

  return (
    <div className="addTask">
      <button className="addButton"></button>

      <div className="taskDetails">
        <input
          type="text"
          placeholder="New Task"
          className="taskToAdd"
          onChange={(event) => setCurrentTask(event.target.value)}
        />
        <button className="addTaskButton" onClick={AddNewTask}>
          Add Task
        </button>
        <div className="selectColor">
          <label>Select Color</label>
          <input
            type="color"
            onChange={(event) => setTaskColor(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTask;
