import React,{ createContext, useState } from "react";
import { TaskInterface } from "../Utils/interfaces";

export const TaskContext = createContext({
    tasks: [] ,
    setTasks: (tasks: any) => {},
})

export const TaskProvider = ({children}) => {
    const [tasks, setTasks] = useState<TaskInterface[]>([])

    const getTasks = () => {
        console.log("getting tasks")
    }

    const value = {
        tasks,
        setTasks
    }
    return(
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}