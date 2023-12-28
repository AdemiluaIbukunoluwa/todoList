import { useContext } from "react"
import { TaskContext } from "../../context/tasks.context"
import Task from "../task/task.component"

const CompletedTasks = () => {
    const {completedTasks} = useContext(TaskContext)
    return (
        <div>
            <h4>Completed Tasks</h4>
            <div>
                {
                    completedTasks.map((task) => {
                       const key = completedTasks.indexOf(task)
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