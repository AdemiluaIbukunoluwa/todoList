import React, { useContext, useState } from "react";
import "./CategoryCard.css";
import { Link, useNavigate } from "react-router-dom";
import { CategoriesContext } from "../../Context/categoriescontext";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCategory } from "../../Utils/editCategories";


const CategoryCard = ({ category }) => {
  const { _id, catName, icon, colortheme } = category;
  const [showOptions, setShowOptions] = useState(false);
  const {categories, setCategories} = useContext(CategoriesContext)
  return (
    <div
      key={_id}
      className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center h-48 relative cat-card-container"
    >
      <DeleteIcon className="absolute top-2 right-2 cursor-pointer" onClick={() =>deleteCategory(_id, categories, setCategories)
      }/>
      <Link to={`/category/${catName}/${_id}`}>

      <p className="text-black text-center ">{catName}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
