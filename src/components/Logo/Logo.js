import classes from "./Logo.module.css";
import logo from "../../images/flower-bouquet.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Pizza project" />
      <div>Flower House</div>
    </div>
  );
}

export default Logo;