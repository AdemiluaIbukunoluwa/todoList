import { useContext } from "react";
import { TaskContext } from "../../context/tasks.context";

const AddTask = () => {
  const { addNewTask, currentTask, setCurrentTask } = useContext(TaskContext);
  const addNewTaskHandler = () => {
    addNewTask(currentTask);
    setCurrentTask({ ...currentTask, text: "" });
  };
  return (
    <div className="addTask m-4 p-4 mb-12">
      <div className="taskDetails text-center flex justify-center">
        <input
          type="text"
          placeholder="New Task"
          className="taskToAdd border sm:w-full p-3 mr-5 lg:w-3/5"
          value={currentTask.text}
          onChange={(event) =>
            setCurrentTask({ ...currentTask, text: event.target.value })
          }
        />
        <div className="time">
          <input
            type="time"
            className="border-2 border-black p-1"
            value={currentTask.time}
            onChange={(event) =>
              setCurrentTask({ ...currentTask, time: event.target.value })
            }
          />
        </div>
      </div>
      <div className="text-center">
      <button
        className="addTaskButton bg-blue-500 hover:bg-white hover:text-black hover:border-blue-400 hover:border   text-white font-bold p-3 rounded shadow mt-3"
        onClick={addNewTaskHandler}
      >
        Add Task
      </button>
      </div>
    </div>
  );
};

export default AddTask;
