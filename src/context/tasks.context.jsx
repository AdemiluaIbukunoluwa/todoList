import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext({
  currentTask: {},
  setCurrentTask: () => {},
  allTasks: [],
  setAllTasks: () => [],
  deleteTask: () => {},
  addNewTask: () => {},
  completedTasks: [],
  setCompletedTasks: () => [],
  setCompletedTasksHandler: () => {},
  showAddTask: true,
  setShowAddTask: () => {},
  editTask: () => {}
});

export const TaskProvider = ({ children }) => {
  // const date = new Date();
  // const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const [allTasks, setAllTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true)
  const [completedTasks, setCompletedTasks] = useState([])
  const [currentTask, setCurrentTask] = useState({
    text: null,
    color: "#5ad4ed",
    isChecked: false,
  });
  
  const addNewTask = (task) => {
    if (task.text) {
      setAllTasks([...allTasks, {...task}])
      //this allows the task to show immediately i click add(for some reason) :)
      document.querySelector(".taskToAdd").value = "";
    }
  };

  // delete tasks by filtering through tasklist and setting all tasks to the filtered list
  const deleteTask = (taskId) => {
    const filteredTasks = allTasks.filter(
      (task) => allTasks.indexOf(task) !== taskId
    );
    setAllTasks(filteredTasks);
  };

const editTask = (task) => {
   setCurrentTask({...task})
   setAllTasks(allTasks.filter((t) => t !== task))
}

  const values = {
    allTasks,
    deleteTask,
    addNewTask,
    showAddTask,
    completedTasks,
    setCompletedTasks,
    setShowAddTask,
    editTask,
    currentTask,
    setCurrentTask
  };

  // adds current task to the tasklist

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
