export const Tasks = ({ taskList }) => {
  return (
    <div className="tasks">
      {taskList.map((task) => {
        {/* set the key to the index of that value in the list of tasks */}
        return <p key={taskList.indexOf(task)}>{task}</p>;
      })}
    </div>
  );
};
