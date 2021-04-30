import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";

import ChacoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({submitCallback,cancelCallback}) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview ingredients={{
          Сhrysan: 8,
          Tulip: 7,
          Pion:6,
          Lilies:2,
          Aster: 6,
          Rose:4,
        }} price={342} />
      </div>
     <ChacoutForm
      submitCallback={submitCallback}
      cancelCallback={cancelCallback}/>
    </div>
  );
}
 
export default CheckoutSummary;