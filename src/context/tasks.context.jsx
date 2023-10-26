import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext({
  taskColor: "black",
  setTaskColor: () => "black",
  allTasks: [],
  setAllTasks: () => [],
  currentTask: '',
  setCurrentTask: () => '',
});

export const TaskProvider = ({ children }) => {
  // default color for each task is black, might change later*
  const [taskColor, setTaskColor] = useState("black");
  const [allTasks, setAllTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const values = {
    taskColor,
    setTaskColor,
    allTasks,
    setAllTasks,
    currentTask,
    setCurrentTask,
  };

  useEffect(() => {}, [taskColor]);

  // adds current task to the tasklist

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
};
