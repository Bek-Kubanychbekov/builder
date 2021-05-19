import classes from "./FlowerAll.module.css";
import dogBackground from "../../../images/flower-bouquet.svg";
import cat from "../../../images/bouquet.svg";
import chameleon from "../../../images/bouquet.svg";
import reccoon from "../../../images/bouquet.svg";
import turtle from"../../../images/bouquet.svg";
import Hamster from "../../../images/bouquet.svg";

const FlowerAll = ({ type ,fixed }) => {
  const types = {
  dog: { backgroundImage: `url(${dogBackground})`, width: "60px", height: "60px"},
  cat: { backgroundImage: `url(${cat})`, width: "60px", height: "60px" },
  chameleon: { backgroundImage: `url(${chameleon})`, width: "60px", height: "60px",},
  reccoon: { backgroundImage: `url(${reccoon})`, width: "60px", height: "60px"  },
  turtle:{ backgroundImage: `url(${turtle})`, width: "90px", height: "90px"  },
  hamster:{ backgroundImage: `url(${Hamster})`, width: "70px", height: "70px"  },
  }
 
  return (
  <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default FlowerAll;