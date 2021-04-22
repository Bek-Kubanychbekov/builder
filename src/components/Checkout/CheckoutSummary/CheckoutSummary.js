import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview ingredients={{
          dog: 80,
          pig: 70,
          mouse:60,
          cat:20,
          reccoon: 67,
          parrot:45,
        }} price={342} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;