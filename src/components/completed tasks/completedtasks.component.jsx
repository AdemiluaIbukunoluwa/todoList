import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../context/tasks.context"
import Task from "../task/task.component"

const CompletedTasks = () => {
    const [completed, setCompleted] = useState([])
    const {allTasks} = useContext(TaskContext)

    useEffect(() => {
        // filter out tasks that have been completed
        setCompleted(allTasks.filter((task) => task.done === true))
    }, [])
    return (
        <div>
            <h4>Tasks</h4>
            <div>
                {
                    completed.map((task) => {
                       const key = completed.indexOf(task)
                        return (
                            <Task key={key} id={key} task={task}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default CompletedTasks