
import Button from "../../UI/Button/Button";
import PizzaControl from "./PizzaControl/PizzaControl";
import classes from "./PizzaControls.module.css";

const PizzaControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    
    total += ingredients[ingredient];
  
    results.push(<PizzaControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
  }

  return (
    <div className={classes.AnimalControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default PizzaControls;