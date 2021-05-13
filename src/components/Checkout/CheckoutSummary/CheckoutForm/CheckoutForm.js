
import Button from "../../../UI/Button/Button";
import classes from "./CheckoutForm.module.css"
const CheckoutForm = ({submitCallback, cancelCallback }) => {
    return (  <form className={classes.CheckoutForm} onSubmit={submitCallback}>
        <div>
        <label for="name" >Name</label>
        <input type="text" id="name" name="name" required placeholder="EX: Elon Musk"></input>
        </div>
        <div>
        <label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="EX: 0500123456" required pattern="0[0-9]{9}"></input>
        </div>
        <div>
        <label for="address">Address</label>
        <input type="text" id="address" name="address" required placeholder="EX: № 31 ctrit Bapa"></input>
        </div>
        
        <Button >Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
    </form>

 );
}
 
export default CheckoutForm;