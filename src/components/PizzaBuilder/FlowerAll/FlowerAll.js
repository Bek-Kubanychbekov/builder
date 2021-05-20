import classes from "./FlowerAll.module.css";
import rose from "../../../images/rose.svg";
import lily from "../../../images/flower.svg";
import tulip from "../../../images/tulip.svg";
import orchid from "../../../images/orhidea.svg";
import carnation from"../../../images/bouquete3.svg";
import hyacinth from "../../../images/asdf.svg";

const FlowerAll = ({ type ,fixed }) => {
  const types = {
  rose : { backgroundImage: `url(${rose})`, width: "60px", height: "60px"},
  lily : { backgroundImage: `url(${lily})`, width: "60px", height: "60px" },
  tulip : { backgroundImage: `url(${tulip})`, width: "60px", height: "60px",},
  orchid : { backgroundImage: `url(${orchid})`, width: "60px", height: "60px"  },
  carnation :{ backgroundImage: `url(${carnation})`, width: "60px", height: "60px"  },
  hyacinth :{ backgroundImage: `url(${hyacinth})`, width: "60px", height: "60px"  },
  }
 
  return (
  <div className={classes.FlowerAll} style={types[type]}></div>
  );
}
export default FlowerAll;