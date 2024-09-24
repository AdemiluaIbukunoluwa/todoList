import Logo from "../Logo/logo";
import './Header.css'
import { Avatar } from "@mui/material";

const SignedInHeader = ({username='john'}) => {
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