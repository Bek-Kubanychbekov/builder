import classes from "./Layout.module.css"
import classes from "../Drawer/Drawer.js";
import classes from "../Toolbar/Toolbar.js";


const Layout = () => {
    return ( 
        <div className={classes.Layout}>
        <Toolbar/>
        <Drawer/>
        {children}
        </div>
     );
}
 
export default Layout;