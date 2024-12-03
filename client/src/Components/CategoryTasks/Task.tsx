import React from 'react'
import {Delete, Edit} from '@mui/icons-material';

const Task = ({taskName='task1'}) => {
  return (
    <div className='flex rounded px-4 py-2 border border-black mx-4 my-3 hover:bg-gray-100'>
      <p>{taskName}</p>
      <div className='ml-auto flex'>
      <button className="editTask mr-3" >
          <Edit/>
        </button>
        <button className="deleteTask" ><Delete/></button>
        </div>
    </div>
  )
}

export default Task
