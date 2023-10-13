export const Tasks = () => {
    return(
        <div className="tasks">
        {
          allTasks.map((task)=> {
            return (
              <p key={allTasks.indexOf(task)}>{task}</p>
            )
          })
        }
      </div>
    )
}