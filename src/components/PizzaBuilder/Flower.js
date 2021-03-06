import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowersControls/FlowerControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Flower.module.css";
import Button from"../UI/Button/Button"
import withAxios from "../withAxios";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { load } from "../store/actions/flowers";
const Flower = ({history}) => {
  const dispatch=useDispatch()
  const isAuthenticated = useSelector(state => state.auth.token !== null)
const flowers=useSelector(state=>state.Flower.flowers);
const price =useSelector(state=>state.Flower.price);
const [ordering, setOrdering] = useState(false);

useEffect(()=>dispatch(load()),[dispatch])


function startOrdering() {
  if (isAuthenticated){
  }
else {
  history.push ("./auth")
}
  setOrdering(true);
}
function stopOrdering() {
  setOrdering(false);
}
function finishOrdering() {
      setOrdering(false);
      // loadDefaults();
      history.push('/checkout');
}
return (
  <div className={classes.Flower}>
    <div className={classes.Flowers}>
    <FlowerPreview
      flowers={flowers}
      price={price} />
    <FlowerControls
      flowers={flowers}
      startOrdering={startOrdering}
      />
    <Modal
      show={ordering}
      cancel={stopOrdering}>
        <OrderSummary
          flowers={flowers}
          price={price}
          />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal></div>
  </div>
);
}



export default withAxios(Flower,axios) ;