import ChacoutForm from "./CheckoutForm/CheckoutForm";
import FlowerPreview from "../../PizzaBuilder/FlowerPreview/FlowerPreview";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
    
      <FlowerPreview flowers={{
           dog: 1,
           chameleon: 1,
           turtle:1,
           Cat:1,
           reccoon: 1,
           hamster:1,
      }} price={342} />
      
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;