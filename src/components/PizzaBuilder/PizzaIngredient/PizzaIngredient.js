  
import classes from "./PizzaIngredient.module.css";


import flower from "../../../images/flower.svg";
import bouquet from "../../../images/bouquet.svg";
import PionBackground from "../../../images/flower-bouquets.svg";
import Lilies from "../../../images/flower-bouquet.svg";
import Aster from"../../../images/qwer.svg";
import Rose from "../../../images/asddf.svg"



const PizzaIngredient = ({ type ,fixed }) => {
  const types = {
  
   flower: { backgroundImage: `url(${flower})`, width: "53px", height: "53px"},
   bouquet: { backgroundImage: `url(${bouquet})`, width: "53px", height: "53px" },
   Pion: { backgroundImage: `url(${PionBackground})`, width: "53px", height: "53px",},
   
   Lilies: { backgroundImage: `url(${Lilies})`, width: "53px", height: "53px"  },
   
   Aster:{ backgroundImage: `url(${Aster})`, width: "53px", height: "53px"  },
   Rose:{ backgroundImage: `url(${Rose})`, width: "53px", height: "53px"  },
  };
  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}
export default PizzaIngredient;