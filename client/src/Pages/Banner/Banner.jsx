import React from "react";
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import { Link } from "react-router-dom";import PageContainer from "../PageContainer/pagecontainer";
;

const Banner = () => {
  return (
    <PageContainer>
    <div className="bg-white w-5/6 sm:w-4/5 sm:h-3/4 lg:w-4/6 m-auto rounded-lg mt-10 shadow-2xl align-middle">
      <div className="image-content">
      {/* <img src={addicon} alt="addicon" className="addicon w-20" />
      <img src={taskicon} alt="taskicon" className="taskicon w-20 block m-auto" /> */}
      <div className="text-content p-8 text-center block align-middle">
        <p className="lg:text-6xl font-bold text-blue-500 title text-4xl">TodoSphere</p>
        <p className="mt-5 text-blue-400 text-2xl title">Your Ultimate Task Management Solution</p>
        <p className="text-blue-300 text-xl mt-3 title">Stay Organized, Stay Productive</p>
        <ul className="flex flex-row justify-center gap-5 mt-10 text-blue-300 caveat-font font-thin ">
          <li className="text-xl"><DoneAllOutlinedIcon/>Boost Your productivity</li>
          <li className="text-xl"><DoneAllOutlinedIcon style={{color: 'black'}}/>Stay Organized</li>
          <li className="text-xl"><DoneAllOutlinedIcon style={{color: 'green'}}/>Stay Motivated</li>
        </ul>
        <Link to={'/signin'}>
       <button className="mt-12 border-2 border-blue-600 p-5 rounded-lg w-44 text-2xl font-bold text-white hover:bg-white hover:text-blue-400 bg-blue-500 hover:rounded-full">Get Started</button>
       </Link>
      </div>
      </div>
    </div>
    </PageContainer>
  );
};

export default Banner;
