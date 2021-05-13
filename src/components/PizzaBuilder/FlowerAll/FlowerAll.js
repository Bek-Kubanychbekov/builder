import classes from "./FlowerAll.module.css";
import dogBackground from "../../../images/pig.svg";
import cat from "../../../images/pig.svg";
import chameleon from "../../../images/pig.svg";
import reccoon from "../../../images/raccoon.svg";
import turtle from"../../../images/mouse.svg";
import Hamster from "../../../images/parrot.svg";

const FlowerAll = ({ type ,fixed }) => {
  const types = {
  Dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px"},
  Cat: { backgroundImage: `url(${cat})`, width: "50px", height: "50px" },
  Chameleon: { backgroundImage: `url(${chameleon})`, width: "60px", height: "60px",},
  Reccoon: { backgroundImage: `url(${reccoon})`, width: "50px", height: "50px"  },
  Turtle:{ backgroundImage: `url(${turtle})`, width: "60px", height: "60px"  },
  Hamster:{ backgroundImage: `url(${Hamster})`, width: "50px", height: "50px"  },
  }
 
  return (
  <div className={classes.FlowerAll} style={types[type]}></div>
  );
}
export default FlowerAll;