import classes from "./Logo.module.css"
import logo from "../../../images/shawarma.svg";

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src={logo} alt="Shoping"/>
            <span>SHAWARMA</span>
        </div>
    );
}

export  default Logo;