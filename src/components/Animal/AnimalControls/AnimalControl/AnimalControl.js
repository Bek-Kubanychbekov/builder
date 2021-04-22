import Button from "../../../UI/Button/Button";
import classes from "./AnimalControl.module.css";



const AnimalControl = ({ type, add, remove }) => {
 
  
  
  
  const names = {
    dog: "  Dog  ",
    pig: "Pig",
    mouse:"Mouse",
    cat:"Cat",
    reccoon: "Reccoon",
    parrot:"Parrot",
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

export default AnimalControl;