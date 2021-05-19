import classes from "./OrderSummary.module.css";
const OrderSummary = ({ flowers, price,}) => {
  const Flower = {
  dog: "  Dog  ",
  cat:"Cat",
  reccoon: "Reccoon",
  chameleon: "Chameleon",
  hamster:"Hamster",
  turtle:"Turtle",
   
  }
  const results = Object.keys(flowers)
    .map(type => <li key={type}>{Flower[type]}: {flowers[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
      {results}
      </ul>
      <strong>Total price: 
      {price.toFixed(1)} 
      som</strong>
      <div className={classes.div}>
     </div>
    </div>
  );
}

export default OrderSummary; 