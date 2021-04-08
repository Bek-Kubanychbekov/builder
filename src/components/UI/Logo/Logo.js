import classes from "./Logo.module.css"
import logo from "../../../images/shawarma.svg";

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src={logo} alt="Shoping"/>
            <span>FOOD</span>
        </div>
    );
}

export  default Logo;