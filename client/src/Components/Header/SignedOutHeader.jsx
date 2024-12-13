import { Button } from "../Button/button";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import './Header.css'

const SignedOutHeader = () => {
    return (
        <div className="flex flex-row justify-between items-center p-5">
            <Logo/>
            <div>
                <Link to={'/signup'}><Button content="Sign Up" rounded={true} transition={false}/></Link>
            </div>
        </div>
    )
}

export default SignedOutHeader;