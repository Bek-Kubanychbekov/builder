
import AnimalAll from "../PizzaIngredient/PizzaIngredient";
import classes from "./PizzaPreview.module.css";


const PizzaPreview = ({ animals,price }) => {
  const result = [];
  for (const animal in animals) {
    for (let i = 0; i < animals[animal]; i++) {
      result.push(<AnimalAll key={[animal + i]} type={[animal]} />)
    }
  }

  return (
    <div className={classes.AnimalPreview}>
    <div className={classes.color}>
    <div className={classes.click}>
    <div className={classes.name}> {[result]}</div>
    </div></div>
    <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default PizzaPreview;