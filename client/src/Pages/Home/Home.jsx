import React from "react";
import addicon from '../../assets/homepage-icons/add.gif'
import taskicon from '../../assets/homepage-icons/task.gif'
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';

const Home = () => {
  return (
    <div className="bg-white w-5/6 sm:w-4/5 lg:w-4/6 sm:h-3/4 h-3/5 m-auto max-md:mt-20 rounded-lg">
      <div className="image-content">
      {/* <img src={addicon} alt="addicon" className="addicon w-20" />
      <img src={taskicon} alt="taskicon" className="taskicon w-20 block m-auto" /> */}
      <div className="text-content p-10 text-center">
        <p className="text-4xl font-bold text-blue-500 mb-12">TodoSphere</p>
        <p className="mt-3 text-blue-400 text-2xl">Your Ultimate Task Management Solution</p>
        
        <p className="text-blue-300 text-xl mt-5">Stay Organized, Stay Productive</p>
        <ul className="flex flex-row justify-center gap-20 mt-10 font-bold text-blue-300 text-lg">
          <li><DoneAllOutlinedIcon/>Boost Your productivity</li>
          <li><DoneAllOutlinedIcon style={{color: 'black'}}/>Stay Organized</li>
          <li><DoneAllOutlinedIcon style={{color: 'green'}}/>Stay Motivated</li>
        </ul>
       <button className="mt-12 border-2 border-blue-600 p-5 rounded-lg w-44 text-2xl font-bold text-white hover:bg-white hover:text-blue-400 bg-blue-500 hover:rounded-full">Get Started</button>
      </div>
      </div>
    </div>
  );
};

export default Home;
