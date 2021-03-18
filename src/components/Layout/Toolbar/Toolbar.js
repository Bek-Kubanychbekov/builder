
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import classes from "./Toolbar.module.css";

const Toolbar = ({ openDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <Nav />
      <DrawerOpen click={openDrawer} />
    </div>
  );
}
 
export default Toolbar;