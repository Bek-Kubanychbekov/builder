import Button from "../../../UI/Button/Button";
import ToysControl from "./ToysControl/ToysControl";
import classes from "./ToysControls.module.css";

const ToysControls = ({
    ingredients,
    addIngredient,
    removeIngredient,
    canBuy,
    setIsBuying
  }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<ToysControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />
        )
  }

  return (
    <div className={classes.ToysControls}>
   
      <strong>TOYS</strong>
      {results}
    
      <Button
        onClick={() => setIsBuying(true)}
        disabled={!canBuy}>
          Order
      </Button>
    </div>
  );
}

export default ToysControls;