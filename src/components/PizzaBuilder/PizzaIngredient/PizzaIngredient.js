  
import classes from "./PizzaIngredient.module.css";


import dogBackground from "../../../images/dog.svg";
import cat from "../../../images/cat.svg";
import pigBackground from "../../../images/pig.svg";
import reccoon from "../../../images/raccoon.svg";
import mouse from"../../../images/mouse.svg";
import parrot from "../../../images/parrot.svg"



const PizzaIngredient = ({ type ,fixed }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px"},
   Cat: { backgroundImage: `url(${cat})`, width: "50px", height: "50px" },
   Pig: { backgroundImage: `url(${pigBackground})`, width: "50px", height: "50px",},
   
    Reccoon: { backgroundImage: `url(${reccoon})`, width: "50px", height: "50px"  },
   
    Mouse:{ backgroundImage: `url(${mouse})`, width: "50px", height: "50px"  },
    Parrot:{ backgroundImage: `url(${parrot})`, width: "50px", height: "50px"  },
  };
  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}
export default PizzaIngredient;