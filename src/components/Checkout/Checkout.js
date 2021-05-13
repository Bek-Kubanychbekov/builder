import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutSummary/CheckoutForm/CheckoutForm";
import FlowerPreview from "../PizzaBuilder/FlowerPreview/FlowerPreview";
import axios from "../../axios";
import withAxios from "../withAxios";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
  const flowers = useSelector(state => state.Flower.flowers);
  const price = useSelector(state => state.Flower.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      flowers: flowers,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
 <div className={classes.Checkout}>
<FlowerPreview flowers={flowers} price={price} /> 
<CheckoutForm
 cancelCallback={cancelCallback}
 submitCallback={submitCallback} />
 </div>

  );
}
 
export default withAxios(Checkout, axios);