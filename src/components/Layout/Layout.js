import classes from "./Layout.module.css"
import Drawer from "../Drawer/Drawer.js";
import Toolbar from "../Toolbar/Toolbar.js";
import Logo from "../Logo/Logo.js";
import Nav from "../Nav/Nav.js";

const Layout = ({children}) => {
    return ( 
        <div className={classes.Layout}>
        <Toolbar/>
        <Drawer/>
        <Logo/>
        <Nav/>
        {children}
        </div>
     );
}
 
export default Layout;