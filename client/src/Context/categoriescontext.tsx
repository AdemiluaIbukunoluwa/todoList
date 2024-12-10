import React,{ createContext, useContext, useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../Utils/axiosInstance";
import { UserDataContext } from "./usercontext";

export interface categoryProps {
    catName: string,
    colorTheme: string,
    icon: string
}


export const CategoriesContext = createContext({
    categories: [],
    setCategories: () => {},
    // createCategory: () => {},
    getCategories: () => {},
    currentCategory: null,
    setCurrentCategory: (category) => {},
    getCategory : (id) => {},
})

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState(null)

    const userid = localStorage.getItem('id')

    const getCategories = async() => {
        console.log('..fetching')
        axiosInstance
        .get(`/categories/${userid}`)
        .then((data) => {setCategories(data.data)
        });
    }

    const getCategory = async(id) => {
        axiosInstance
        .get(`/getcategory/${id}`)
        .then((data) => setCurrentCategory(data.data));
    }
    

    const values = {categories, setCategories, getCategories, currentCategory, setCurrentCategory, getCategory}

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    )
}