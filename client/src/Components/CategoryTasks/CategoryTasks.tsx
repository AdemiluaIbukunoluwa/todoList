import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageContainer from "../../Pages/PageContainer/pagecontainer";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import { CategoriesContext } from "../../Context/categoriescontext";
import axiosInstance from "../../Utils/axiosInstance";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddTask from "./AddTask";
import { TaskContext } from "../../Context/taskcontext";
import { TaskInterface } from "../../Utils/interfaces";

const CategoryTasks = () => {
  const { catName, id } = useParams();
  const { categories, currentCategory, setCurrentCategory, getCategory } =
    useContext(CategoriesContext);
  const [showAddTask, setShowAddTask] = useState(false);
  const { tasks } = useContext(TaskContext);
  const [catTasks, setCatTasks] = useState<TaskInterface[]>([]);

  // ore current category details incase the user reloads the page
  useEffect(() => {
    if (!currentCategory) {
      getCategory(id);
    }
  }, []);

  useEffect(() => {
    setCatTasks(currentCategory?.tasks);
  }, [currentCategory])

  return (
    <PageContainer signedIn={true}>
      <div className="bg-white w-4/5 h-96 mt-20 m-auto shadow-sm rounded-lg p-10">
        <button className="float-right" onClick={() => setShowAddTask(true)}>
          <AddIcon
            className="text-black"
            style={{ height: "40px", width: "50px" }}
          />
        </button>
        <p className="header text-center text-3xl ">{catName?.toUpperCase()}</p>
        <div className="m-5 p-3">
          {tasks.map((task, index) => {
            return <Task key={index} taskName={task.taskName} />;
          })}
        </div>
      </div>
      {showAddTask == true && (
        <Dialog keepMounted open={showAddTask} fullWidth>
          <DialogTitle className="flex justify-between">
            Add new Task
            <button onClick={() => setShowAddTask(false)}>
              <CloseIcon />
            </button>
          </DialogTitle>
          <AddTask catId={id} closePopup={() => setShowAddTask(false)} />
        </Dialog>
      )}
    </PageContainer>
  );
};

export default CategoryTasks;
