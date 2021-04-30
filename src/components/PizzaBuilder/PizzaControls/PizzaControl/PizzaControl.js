

import Button from "../../../UI/Button/Button";
import classes from "./PizzaControl.module.css";



const PizzaControl = ({ type, add, remove }) => {
 
  
  
  
  const names = {
    Dog: "Сhrysan ",
    Pig: "Tulip",
    Mouse:"Pion",
    Cat:"Lilies",
    Reccoon: "Aster",
    Parrot:"Rose",
   }
   
  
   
  return (
    <div className={classes.AnimalControl}>
  <Button
        className={classes.plus}
        onClick={() => {
          remove(type);
        
        }}
      >
        -
      </Button>

      <div className={classes.ingredient}>



        {names[type]}
        
      </div>
 

      <Button
        className={classes.minus}
        onClick={() => {
          add(type);
          
        }}
      >
        +
      </Button>
    </div>
  );
}

export default PizzaControl;