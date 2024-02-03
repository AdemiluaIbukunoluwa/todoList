import { useContext } from "react";
import "./addtask.styles.css";
import { TaskContext } from "../../context/tasks.context";

const AddTask = () => {
  const { addNewTask, currentTask, setCurrentTask } = useContext(TaskContext);


  // default color for each task is black, might change later*

  const addNewTaskHandler = () => {
    addNewTask(currentTask);
    setCurrentTask({ ...currentTask, text: '' });
  };

  return (
    <div className="addTask col-6">
      <div className="taskDetails">
        <input
          type="text"
          placeholder="New Task"
          className="taskToAdd"
          value={currentTask.text}
          onChange={(event) =>
            setCurrentTask({ ...currentTask, text: event.target.value })
          }
        />
        <div className="selectColor">
          {/* <label>Select Color</label> */}
          <input
            type="color"
            value={currentTask.color}
            onChange={(event) =>
              setCurrentTask({ ...currentTask, color: event.target.value })
            }
          />
        </div>
        <div className="time">
          {/* <label>Time</label> */}
          <input
            type="time"
            value={currentTask.time}
            onChange={(event) => setCurrentTask({...currentTask, time:event.target.value})}
          />
        </div>
      </div>
      <button className="addTaskButton" onClick={addNewTaskHandler}>
          Add Task
        </button>
    </div>
  );
};

export default AddTask;
