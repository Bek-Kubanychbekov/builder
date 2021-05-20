import classes from "./FlowerAll.module.css";
import rose from "../../../images/flower-bouquet.svg";
import lily from "../../../images/bouquet.svg";
import tulip from "../../../images/bouquet.svg";
import orchid from "../../../images/bouquet.svg";
import carnation from"../../../images/bouquet.svg";
import hyacinth from "../../../images/bouquet.svg";

const FlowerAll = ({ type ,fixed }) => {
  const types = {
  rose : { backgroundImage: `url(${rose})`, width: "60px", height: "60px"},
  lily : { backgroundImage: `url(${lily})`, width: "60px", height: "60px" },
  tulip : { backgroundImage: `url(${tulip})`, width: "60px", height: "60px",},
  orchid : { backgroundImage: `url(${orchid})`, width: "60px", height: "60px"  },
  carnation :{ backgroundImage: `url(${carnation})`, width: "90px", height: "90px"  },
  hyacinth :{ backgroundImage: `url(${hyacinth})`, width: "70px", height: "70px"  },
  }
 
  return (
  <div className={classes.FlowerAll} style={types[type]}></div>
  );
}
export default FlowerAll;