import AnimalPreview from "./PizzaPreview/PizzaPreview";
import PizzaControls from "./PizzaControls/PizzaControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./PizzaBuilder.module.css";
import Button from"../UI/Button/Button"
import { useEffect, useState } from "react";
import axios from "axios";

const PizzaBuilder = ({history}) => {
  const prices = {
    Dog: 80,
    Pig: 70,
    Mouse:60,
    Cat:20,
    Reccoon: 67,
    Parrot:45,
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
      address: "21.07.2003",
      phone: "0509 033337",
      name: "Kubanychbekov.Bek",
    })
    .then(() => {
      setOrdering(false);
      loadDefaults();
      history.push('/checkout');
    });
}

return (
  <div className={classes.Animal}>
    <div className={classes.Aimall}>
    <AnimalPreview
      ingredients={ingredients}
      price={price} />
    <PizzaControls
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
      </Modal></div>
  </div>
);
}



export default PizzaBuilder;