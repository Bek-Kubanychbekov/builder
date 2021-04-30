  
import classes from "./PizzaIngredient.module.css";


import dogBackground from "../../../images/flower.svg";
import cat from "../../../images/bouquet.svg";
import pigBackground from "../../../images/flower-bouquets.svg";
import reccoon from "../../../images/flower-bouquet.svg";
import mouse from"../../../images/qwer.svg";
import parrot from "../../../images/asddf.svg"



const PizzaIngredient = ({ type ,fixed }) => {
  const types = {
  
   Dog: { backgroundImage: `url(${dogBackground})`, width: "53px", height: "53px"},
   Cat: { backgroundImage: `url(${cat})`, width: "53px", height: "53px" },
   Pig: { backgroundImage: `url(${pigBackground})`, width: "53px", height: "53px",},
   
    Reccoon: { backgroundImage: `url(${reccoon})`, width: "53px", height: "53px"  },
   
    Mouse:{ backgroundImage: `url(${mouse})`, width: "53px", height: "53px"  },
    Parrot:{ backgroundImage: `url(${parrot})`, width: "53px", height: "53px"  },
  };
  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}
export default PizzaIngredient;