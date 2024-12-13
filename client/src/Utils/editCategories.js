import { toast } from "react-toastify"
import axiosInstance from "./axiosInstance"
import { useContext } from "react"
import { CategoriesContext } from "../Context/categoriescontext"

export const deleteCategory = (id, categories, setCategories) => {
    axiosInstance.delete(`/deletecategory/${id}`)
    .then(() => {
        setCategories(categories.filter(category => category._id !== id))
        toast.success("Category deleted successfully")
    })
    .catch(err => {
        console.log(err)
        toast.error("Error deleting category. Try again later")
    })
}