import { useDispatch } from "react-redux";
import { add, remove } from "../../../store/actions/flowers";
import Button from "../../../UI/Button/Button";
import classes from "./FlowerControl.module.css";

const FlowerControl = ({ type, count }) => {
const dispatch=useDispatch();
const names = {
dog: "  Dog  ",
cat:"Cat",
reccoon: "Reccoon",
chameleon: "Chameleon",
hamster:"Hamster",
turtle:"Turtle",
}
   
  return (
    <div className={classes.FlowerControl}>
    <Button onClick={() => dispatch(add(type))}>+</Button>
    {names[type]}
    <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default FlowerControl;