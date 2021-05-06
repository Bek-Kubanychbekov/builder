import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";

import ChacoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview ingredients={{
          Сhrysan: 1,
          Tulip: 1,
          Pion:1,
          Lilies:1,
          Aster: 1,
          Rose:1,
        }} price={150} />
      </div>
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;