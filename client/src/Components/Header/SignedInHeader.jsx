import { useContext, useEffect } from "react";
import Logo from "../Logo/logo";
import './Header.css'
import { Avatar } from "@mui/material";
import { UserDataContext } from "../../Context/usercontext";
import { Link, useNavigate } from "react-router-dom";

const SignedInHeader = ({username=''}) => {
    const {user,getUser, setUser} = useContext(UserDataContext)
    const navigate = useNavigate()
    // fetch user data
    useEffect(() => {
        if(user._id == null){
            getUser()
        }
    }, [])


    return (
        <div className="flex flex-row justify-between items-center p-5">
            <Logo/>
            <div className="flex">
                <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
                <Link to={'/welcome'} onClick={() => localStorage.removeItem('id')} className="ml-4 text-lg font-medium text-white px-2 rounded-md hover:underline">Log out</Link>
            </div>
        </div>
    )
}

export default SignedInHeader