import Button from "../../../UI/Button/Button";
import classes from "./PizzaControl.module.css";

const PizzaControl = ({ type, add, remove, count }) => {
  const name ={
    tomato: "Cucumber" ,
    salami: "Salad",
    greenOlive: "Fries",
    blackOlive: "Mead",
    redPepper: "Ketchup",
    yellowPepper: "Tomato",
  }
  return (
    <div className={classes.PizzaControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        {/* <PizzaIngredient type={type} fixed /> */}
        {name[type]}
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default PizzaControl;