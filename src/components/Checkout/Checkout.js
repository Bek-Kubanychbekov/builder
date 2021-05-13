import { useSelector } from "react-redux";
import CheckoutForm from "./CheckoutSummary/CheckoutForm/CheckoutForm";
import FlowerPreview from "../PizzaBuilder/FlowerPreview/FlowerPreview";
import axios from "../../axios";
import withAxios from "../withAxios";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
  const animals = useSelector(state => state.Animal.animals);
  const price = useSelector(state => state.Animal.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      animals: animals,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
 <div className={classes.Checkout}>
<FlowerPreview animals={animals} price={price} /> 
<CheckoutForm
 cancelCallback={cancelCallback}
 submitCallback={submitCallback} />
 </div>

  );
}
 
export default withAxios(Checkout, axios);