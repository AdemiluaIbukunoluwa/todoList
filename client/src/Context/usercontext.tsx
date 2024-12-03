import React, { createContext, useEffect, useState } from "react";
import axiosInstance from "../Utils/axiosInstance";
import axios from "axios";

export interface userProps {
    _id: string | null,
    name: string,
    email: string,
}


export const UserDataContext = createContext({
    user: {
        _id: null,
        name: "",
        email: "",
    },
    setUser: () => {},
    getUser: () => {}
})

export const UserDataProvider = ({children}) => {

    const [user, setUser] = useState<userProps>({
        _id: null,
        name: "",
        email: "",
    });

    // fetch the user data using the id in local storage
    const getUser = async() => {
        const id = localStorage.getItem("id");
        await axiosInstance.get(`/getuser/${id}`)
        .then((data) => setUser(data.data))
    }

    const values = {
        user,
        setUser,
        getUser
    }

    return (
        <UserDataContext.Provider value={values}>
            {children}
        </UserDataContext.Provider>
    )
}