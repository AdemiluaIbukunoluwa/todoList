import AddBoxIcon from "@mui/icons-material/AddBox";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="flex flex-row" to={"/"}>
        <AddBoxIcon fontSize="large" style={{ color: "white" }} />
        <p className="text-2xl font-bold text-white logo-font">TodoSphere</p>
      </Link>
    </div>
  );
};

export default Logo;
