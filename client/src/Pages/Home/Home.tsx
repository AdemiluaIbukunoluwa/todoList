import React, { useContext, useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Dialog, DialogTitle } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PageContainer from "../PageContainer/pagecontainer";
import {
  UserDataContext,
  userProps
} from "../../Context/usercontext";
import axiosInstance from "../../Utils/axiosInstance";
import AddCategory from "../../Components/AddCategory/AddCategory";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { CategoriesContext } from "../../Context/categoriescontext";

const Home = () => {
  const [showAddCategory, setShowAddCategory] = useState(false);
  const { user, setUser, getUser } = useContext(UserDataContext);
  // if the user is not just logging in, get the user from the database
  // const [categories, setCategories] = useState([]);
  const {categories, setCategories} = useContext(CategoriesContext)


  useEffect(() => {
    getUser();
  }, []);
  useEffect(() => {
    if (user._id) {
      axiosInstance
        .get(`/categories/${user._id}`)
        .then((data) => setCategories(data.data));
    }
  }, [user._id]);

  return (
    // provider for the data for categories
      <PageContainer signedIn={true}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-20 text-2xl text-center">
          <div className="bg-white shadow-lg rounded-lg flex flex-col justify-center items-center h-48">
            <button onClick={() => setShowAddCategory(true)}>
              <AddCircleIcon style={{ fontSize: "5rem" }} />
            </button>
            Add Category
          </div>
          {categories?.map((category) => {
            return <CategoryCard key={category._id} category={category} />;
          })}
          <div>
            <Dialog keepMounted open={showAddCategory} fullWidth>
              <DialogTitle className="flex justify-between">
                Add new Category
                <button onClick={() => setShowAddCategory(false)}>
                  <CloseIcon />
                </button>
              </DialogTitle>
              <AddCategory
                currentCategories={categories}
                setCategories={setCategories}
                openDialog={setShowAddCategory}
              />
            </Dialog>
          </div>
        </div>
      </PageContainer>
  );
};

export default Home;
