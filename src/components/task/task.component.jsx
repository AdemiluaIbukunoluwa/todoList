import "./task.styles.css";

const Task = ({ id, task }) => {
  // id is the key for the item in the list

  const deleteTask = (index) => {
    const toRemove = document.querySelector(`.task${index}`);
    toRemove.remove();
  };
  return (
    <div
      className={`task col-md-1 task${id}`}
    >
      <input type="checkbox" />
      <p>{task}</p>
      {/* delete task takes the key parameter so that it can delete the task with that key */}
      <button className="deleteTask" onClick={() => deleteTask(id)}></button>
    </div>
  );
};

export default Task;
