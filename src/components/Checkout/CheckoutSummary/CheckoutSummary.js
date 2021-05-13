import ChacoutForm from "./CheckoutForm/CheckoutForm";
import FlowerPreview from "../../PizzaBuilder/FlowerPreview/FlowerPreview";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <FlowerPreview flowers={{
        Сhrysan: 1,
        Tulip: 1,
        Pion:1,
        Lilies:1,
        Aster: 1,
        Rose:1,
      }} price={342} />
      
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;