import { useContext, useEffect } from "react";
import Logo from "../Logo/logo";
import './Header.css'
import { Avatar } from "@mui/material";
import { UserDataContext } from "../../Context/usercontext";

const SignedInHeader = ({username=''}) => {
    const {user,getUser} = useContext(UserDataContext)
    // fetch user data
    useEffect(() => {
        if(user._id == null){
            getUser()
        }
    }, [])
    return (
        <div className="flex flex-row justify-between items-center p-5">
            <Logo/>
            <div>
                {/* <p>Welcome, {username}</p> */}
                <Avatar>{username.charAt(0).toUpperCase()}</Avatar>
            </div>
        </div>
    )
}

export default SignedInHeader