import logoutIcon from "./power.png";
import "./LogOutButton.css";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const LogOutButton = (prop) => {
    const authctx = useContext(AuthContext);
    const logOutHandler = ()=>{
        authctx.logout();
    }

  return (
    <div className="logout-icon-container" onClick={logOutHandler}>
      <img
        src={logoutIcon}
        className="logout-icon"
        alt="logout"
        title="Logout"
      ></img>
    </div>
  );
};

export default LogOutButton;
