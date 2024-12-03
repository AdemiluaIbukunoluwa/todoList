import React, { useContext, useState } from "react";
import {toast} from 'react-toastify'
import axiosInstance from "../../Utils/axiosInstance";
import { UserDataContext } from "../../Context/usercontext";
import { CategoriesContext } from "../../Context/categoriescontext";

interface Category {
  catName: string;
  colorTheme: string;
  icon: string;
}

const AddCategory = ({currentCategories, setCategories, openDialog}) => {
  const [category, setCategory] = useState<Category>({catName: "", colorTheme: "#ffffff", icon: ""});
  const {user} = useContext(UserDataContext)

  const createCategory = async() => {
    
    // update categories list
    setCategories([...currentCategories, category]) 
    // update ecategories in the database
      await axiosInstance.post('/createcategory', {
      category: {
        userId: user._id,
        ...category
      }})
      .then(() => openDialog(false))
      .then(() => toast.success("Category created"))
      .catch((error) => {
        toast.error("Error creating category, try again later!")
        console.log(error.message)
      })
      
  }

 
  return (
    <div className="w-full gap-4 p-12 flex flex-col" style={{ backgroundColor: category.colorTheme }}>
      <input
        type="text"
        placeholder="Category Name"
        className="border-2 p-2 w-80 mx-auto"
        required
        onChange={(e) => setCategory({ ...category, catName: e.target.value })}
      />
      <div className="flex p-6 border-2 border-black-200 mt-3">
        <label htmlFor="colortheme" className="mr-5 font-bold text-xl">Color theme</label>
        <input value={category.colorTheme} name="colortheme" type="color" className="w-20 h-10 mr-4" onChange={(e) => setCategory({ ...category, colorTheme: e.target.value })} />
        <p className="font-thin">{category.colorTheme}</p>
      </div>
      <button className="mx-auto rounded-md border-2 border-black shadow-xl w-1/3 p-3 bg-blue-100 text-xl uppercase" onClick={() => createCategory()}>Create</button>
    </div>
  );
};

export default AddCategory;
