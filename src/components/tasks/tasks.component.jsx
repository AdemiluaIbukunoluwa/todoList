import './tasks.component.css'
export const Tasks = ({ taskList }) => {
  return (
    <div className="tasks">
      {taskList.map((task) => {
        {/* set the key to the index of that value in the list of tasks */}
        return(
            <div className="task" key={taskList.indexOf(task)}>
                <input type="checkbox"/>
                <p>{task}</p>
            </div>
        )
      })}
      
    </div>
  );
};
