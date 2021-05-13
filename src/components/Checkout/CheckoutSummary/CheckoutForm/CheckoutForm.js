import Button from "../../../UI/Button/Button"
import classes from "./CheckoutForm.module.css"
const CheckoutForm = ({submitCallback, cancelCallback }) => {
    return (  <form className={classes.ChacoutForm} onSubmit={submitCallback}>
        <div><label htmlFor="name" >Name</label>
        <input type="text" id="name" name="name" placeholder="EX: Elon Musk"></input></div>
        <div><label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="EX: 0500123456" required pattern="0[0-9]{9}"></input></div>
        <div><label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="EX: St. Bapa  №31"></input></div>
        <Button >Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
    </form>

 );
}
 
export default CheckoutForm;