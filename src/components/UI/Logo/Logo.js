import classes from "./Logo.module.css"
import logo from "../../../images/slack.svg";

const Logo = () => {
    return (
        <div className = {classes.Logo}>
            <img src={logo} alt=""/>
            <span>PHONE</span>
        </div>
    );
}

export  default Logo;