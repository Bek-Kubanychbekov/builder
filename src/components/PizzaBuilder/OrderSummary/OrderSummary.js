import classes from "./OrderSummary.module.css";
const OrderSummary = ({ flowers, price,}) => {
  const Flower = {
    rose : "Rose ",
    lily :"Lily ",
    tulip : "Tulip ",
    orchid : "Orchid ",
    carnation :"Carnation ",
    hyacinth :"Hyacinth ",
   
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