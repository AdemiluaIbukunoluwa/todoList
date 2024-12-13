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
})

export const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([])

    const userid = localStorage.getItem('id')

    const getCategories = async() => {
        axiosInstance
        .get(`/categories/${userid}`)
        .then((data) => {setCategories(data.data)
        });
    }
    
    const values = {categories, setCategories, getCategories}

    return (
        <CategoriesContext.Provider value={values}>
            {children}
        </CategoriesContext.Provider>
    )
}