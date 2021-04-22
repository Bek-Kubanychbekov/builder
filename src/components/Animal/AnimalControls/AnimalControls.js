import Button from "../../UI/Button/Button";
import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";

const AnimalControls = ({
  ingredients,
  addIngredient,
  removeIngredient,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    
    total += ingredients[ingredient];
  
    results.push(<AnimalControl
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

export default AnimalControls;