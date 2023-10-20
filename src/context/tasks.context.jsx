import { createContext, useState } from "react";

export const UserContext = createContext({
    task : null,
    setTask: () => null,
    allTasks: [],
    setAllTasks : () => null,
    completedTasks: null, 
    setCompletedTasks: () => null
})

export const UserProvider = ({children}) => {
    const [task, setTask] = useState("");
    const [allTasks, setAllTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const values = {task, setTask, allTasks, setAllTasks, completedTasks, setCompletedTasks}
    return(
        <UserContext.Provider value={values}>{children}</UserContext.Provider>
    )
}