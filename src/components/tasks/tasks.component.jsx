import "./tasks.component.css";

export const Tasks = ({ taskList }) => {
  const deleteTask = (index) => {
      let toRemove = document.querySelector(`.${index}`)
      toRemove.remove()
  };

  var name = ``;
  // add color picker for each task
  return (
    <div className="tasks">
      <h2>Things to do</h2>
      {taskList.map((task) => {
        return (
          //set a classname to task + the index of this particular task so that we can access this exact task when we want to delete
          <div
            className={`task task${taskList.indexOf(task)} okay`}
            key={taskList.indexOf(task)}
          >
            <input type="checkbox" />
            <p>{task}</p>
            <button
              className="delete"
              onClick={() => deleteTask(`task${taskList.indexOf(task)}`)}
            ></button>
          </div>
        );
      })}
    </div>
  );
};
