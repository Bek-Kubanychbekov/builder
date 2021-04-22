import classes from "./AnimalAll.module.css";


import dogBackground from "../../../imges/dog.svg";
import cat from "../../../imges/cat.svg";
import pigBackground from "../../../imges/pig.svg";
import reccoon from "../../../imges/raccoon.svg";
import mouse from"../../../imges/mouse.svg";
import parrot from "../../../imges/parrot.svg"



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