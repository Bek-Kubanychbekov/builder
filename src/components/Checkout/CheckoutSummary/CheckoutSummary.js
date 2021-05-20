import ChackoutForm from "./CheckoutForm/CheckoutForm";
import FlowerPreview from "../../PizzaBuilder/FlowerPreview/FlowerPreview";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <FlowerPreview flowers={{
        rose : 1,
        lily :1,
        tulip :1,
        orchid : 1,
        carnation :1, 
        hyacinth : 1,
      }} price={1000} />
      
     <ChackoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;