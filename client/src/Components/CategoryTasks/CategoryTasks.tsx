import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageContainer from "../../Pages/PageContainer/pagecontainer";
import Task from "./Task";
import AddIcon from "@mui/icons-material/Add";
import { CategoriesContext } from "../../Context/categoriescontext";
import axiosInstance from "../../Utils/axiosInstance";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddTask from "./AddTask";
// import { TaskContext } from "../../Context/taskcontext";
import { TaskInterface, CategoryInterface } from "../../Utils/interfaces";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const CategoryTasks = () => {
  const { id } = useParams();
  const { categories, getCategories, setCategories} =
    useContext(CategoriesContext);
  const [showAddTask, setShowAddTask] = useState(false);
  // const { tasks } = useContext(TaskContext);
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  const [category, setCategory] = useState<CategoryInterface>();


  useEffect(() => {
    // get the categories from the db
    getCategories()
  }, [])

  useEffect(() => {
        // filter out the required category
    let cat = categories.filter((category) => category._id === id)
    setCategory(cat[0])
    setTasks(cat[0]?.tasks )
  }, [categories, category])

  const addTask = (task) => {
      setTasks([...tasks, task])
      axiosInstance.post(`/addTask/${id}`, {
        task: task
      })
      setShowAddTask(false)
  }

  const deleteTask =(taskId) => {
    const catId = category?._id
    axiosInstance.delete(`/deletetask/${catId}/${taskId}`).then((data) => {
      setTasks(data.data.tasks)
    })
    .catch(() => toast.error('Error adding task'))
  }

  return (
    <PageContainer signedIn={true}>
      <div className="bg-white w-4/5 h-max mt-20 m-auto shadow-sm rounded-lg p-10">
        <button className="float-right" onClick={() => setShowAddTask(true)}>
          <AddIcon
            className="text-black"
            style={{ height: "40px", width: "50px" }}
          />
        </button>
        <Link to={'/'} className="float-left" >
          <CloseIcon
            className="text-black"
            style={{ height: "40px", width: "50px" }}
          />
        </Link>
        <p className="header text-center text-3xl ">{category?.catName.toUpperCase()}</p>
        <div className="m-5 p-3">
          {category ? tasks?.map((task, index) => {
            return <Task  key={index} task={task} deleteHandler={deleteTask}/>;
          }): <Loading/>
        }
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
          <AddTask catId={id} closePopup={() => setShowAddTask(false)} setTasksToAdd={addTask}/>
        </Dialog>
      )}
    </PageContainer>
  );
};

export default CategoryTasks;