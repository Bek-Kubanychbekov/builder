
import PizzaIngredient from "../PizzaIngredient/PizzaIngredient";

import classes from "./PizzaPreview.module.css";


const PizzaPreview = ({ ingredients,price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<PizzaIngredient key={[ingredient + i]} type={[ingredient]} />)
    }
  }

  return (
    <div className={classes.PizzaPreview}>
      <div
        className={classes.color}>
          <div className={classes.name}> {[result]}</div>
       
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default PizzaPreview;