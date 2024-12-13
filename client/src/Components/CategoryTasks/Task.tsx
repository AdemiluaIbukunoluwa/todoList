import React from 'react'
import {Delete, Edit} from '@mui/icons-material';

const Task = ({task, deleteHandler}) => {
  return (
    <div className='flex rounded px-4 py-2 border border-black mx-4 my-3 hover:bg-gray-100'>
      <input type="checkbox" />
      <p>{task.taskName}</p>
      <div className='ml-auto flex'>
      <button className="editTask mr-3" >
          <Edit/>
        </button>
        <button className="deleteTask" onClick={() => deleteHandler(task._id)}><Delete/></button>
        </div>
    </div>
  )
}

export default Task
