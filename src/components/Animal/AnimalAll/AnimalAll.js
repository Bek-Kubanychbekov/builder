import classes from "./AnimalAll.module.css";


import dogBackground from "../../../images/logo.svg";
import cat from "../../../images/cucumber.svg";
import pigBackground from "../../../images/tomato.svg";
import reccoon from "../../../images/ketchup.svg";
import mouse from"../../../images/salad.svg";
import parrot from "../../../images/salami.svg"



const AnimalAll = ({ type ,fixed }) => {
  const types = {
  
   dog: { backgroundImage: `url(${dogBackground})`, width: "50px", height: "50px"},
   cat: { backgroundImage: `url(${cat})`, width: "50px", height: "50px" },
   pig: { backgroundImage: `url(${pigBackground})`, width: "50px", height: "50px",},
   
    reccoon: { backgroundImage: `url(${reccoon})`, width: "50px", height: "50px"  },
   
    mouse:{ backgroundImage: `url(${mouse})`, width: "50px", height: "50px"  },
    parrot:{ backgroundImage: `url(${parrot})`, width: "50px", height: "50px"  },
  };
  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;