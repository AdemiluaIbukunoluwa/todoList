import { Outlet } from "react-router-dom";

const Heading = () => {
  return (
    <>
    <div className="heading mb-10 px-3 pt-6">
      <h1 className="logo text-2xl text-blue-400 inline lowercase"><a href="/">
        TODOSPHERE
        </a>
      </h1>
      {/* <div className="flex text-sm w-50 float-right text-design">
        <a href="/completed" className="px-3 py-1 rounded bg-white hover:bg-blue-300 hover:text-white mr-3 hover:border-slate-950">
          completed tasks
        </a>
      </div> */}
    </div>
    <Outlet/>
    </>
  );
};
export default Heading;
