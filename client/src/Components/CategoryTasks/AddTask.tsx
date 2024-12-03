import React, { useContext, useEffect, useRef, useState } from 'react'
import axiosInstance from '../../Utils/axiosInstance'
import { TaskContext } from '../../Context/taskcontext'
import { TaskInterface } from '../../Utils/interfaces'
import { CategoriesContext } from '../../Context/categoriescontext'

const AddTask = ({catId, closePopup}) => {

  const {tasks, setTasks} = useContext(TaskContext)
  const {currentCategory} = useContext(CategoriesContext)
    const [currentTask, setCurrentTask] = useState<TaskInterface>({
      taskName: "",
      taskNotes: "",
      taskStatus: "todo",
    })

    const addNewTask = () => {
      if (currentTask.taskName.length > 0) {
      setTasks([...tasks, currentTask])
      // axiosInstance.post(`/addTask/${catId}`, {
      //   tasks: [currentTask]
      // })
      closePopup()
    }
  }

  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); 

    return (
      <div className="addTask m-4 p-4 mb-12 ">
        <div className="taskDetails text-center flex justify-center">
          <input
            type="text"
            placeholder="New Task"
            className="taskToAdd border sm:w-full p-3 mr-5 lg:w-3/5"
            value={currentTask.taskName}
            ref={inputRef}
            onChange={(event) =>
              setCurrentTask({ ...currentTask, taskName: event.target.value })
            }
          />
          {/* <div className="time">
            <input
              type="time"
              className="border-2 border-black p-1"
              value={currentTask.time}
              onChange={(event) =>
                setCurrentTask({ ...currentTask, time: event.target.value })
              }
            />
          </div> */}
        </div>
        <div className="text-center">
        <button
          className="addTaskButton bg-blue-500 hover:bg-white hover:text-black hover:border-blue-400 hover:border   text-white font-bold p-3 rounded shadow mt-3"
          onClick={() => addNewTask()}
        >
          Add Task
        </button>
        </div>
      </div>
    );
}

export default AddTask
