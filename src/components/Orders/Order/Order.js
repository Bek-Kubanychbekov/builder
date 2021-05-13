import classes from "./Order.module.css";

const Order = ({ name, phone, address, flowers,price }) => {
  const output = Object.keys(flowers).map(label => <em>{label}: - {flowers[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name:<strong>{name}</strong> </li>
      <li>Phone:<strong>{phone}</strong> </li>
      <li>Address:<strong>{address}</strong> </li>z
      <li >Flowers bouquets house: {output}</li>
      <li className={classes.som} >the buy som :{price}</li>
      <li><strong>Thanks for your purchase</strong></li>  
       <div>@Bek</div>
    </ul>
 
  );
}

export default Order;