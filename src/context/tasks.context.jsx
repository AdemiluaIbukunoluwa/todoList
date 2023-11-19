import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext({
  allTasks: [],
  setAllTasks: () => [],
  deleteTask: () => {},
  addNewTask: () => {},
  showAddTask: true,
  setShowAddTask: () => {}
});

export const TaskProvider = ({ children }) => {
  // add new task to the beginning on the task list(unshift)
  const addNewTask = (task) => {
    if (task.text) {
      setAllTasks([...allTasks, {...task}])
      //this allows the task to show immediately i click add(for some reason) :)
      //add code here to make the text in the input box to clear after adding the task
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

  const [allTasks, setAllTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(true)

  const values = {
    allTasks,
    deleteTask,
    addNewTask,
    showAddTask,
    setShowAddTask
  };

  // adds current task to the tasklist

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
