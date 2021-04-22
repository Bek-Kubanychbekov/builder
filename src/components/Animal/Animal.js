import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import Button from"../UI/Button/Button"
import { useEffect, useState } from "react";
import axios from "axios";

const Animal = ({history}) => {
  const prices = {
    dog: 80,
    pig: 70,
    mouse:60,
    cat:20,
    reccoon: 67,
    parrot:45,
  };
  


const [ingredients, setAnimals] = useState({});
const [price, setPrice] = useState(0);
const [ordering, setOrdering] = useState(false);

useEffect(loadDefaults, []);

function loadDefaults() {
  axios
    .get('https://builder-e02c1-default-rtdb.firebaseio.com/default.json')
    .then(response => {
      setPrice(response.data.price);

      
      setAnimals(response.data.ingredients);
    });
}

function addIngredient(type) {
  const newIngredients = { ...ingredients };
  newIngredients[type]++;
  setPrice(price + prices[type]);
  setAnimals(newIngredients);
}

function removeIngredient(type) {
  if (ingredients[type]) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setPrice(price - prices[type]);
    setAnimals(newIngredients);
  }
}

function startOrdering() {
  setOrdering(true);
}

function stopOrdering() {
  setOrdering(false);
}

function finishOrdering() {
  axios
    .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
      ingredients: ingredients,
      price: price,
      address: "28.08.2004",
      phone: "0 552 955 915",
      name: "Alinur Abdyiskakov",
    })
    .then(() => {
      setOrdering(false);
      loadDefaults();
      history.push('/checkout');
    });
}

return (
  <div className={classes.Animal}>
    <AnimalPreview
      ingredients={ingredients}
      price={price} />
    <AnimalControls
      ingredients={ingredients}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      startOrdering={startOrdering}
      />
    <Modal
      show={ordering}
      cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
          />
        <Button onClick={finishOrdering} >Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
  </div>
);
}



export default Animal;