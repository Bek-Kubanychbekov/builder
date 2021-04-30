import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      ingredients:{
        Сhrysan: 1,
        Tulip:1,
        Pion:1,
        Lilies:1,
        Aster: 1,
        Rose:1,
      }
    }
    axios.post('https://builder-8df5b-default-rtdb.firebaseio.com/orders.json',order)
    .then(response =>{
      history.replace('/');
    })

    console.log(order)
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
      
    </div>
  );
}
 
export default Checkout