  
import FlowerAll from "../FlowerAll/FlowerAll";
import classes from "./FlowerPreview.module.css";
const FlowerPreview = ({ flowers,price }) => {
  const result = [];
  for (const flower in flowers) {
    for (let i = 0; i < flowers[flower]; i++) {
      result.push(<FlowerAll key={[flower + i]} type={[flower]} />)
    }
  }

  return (
    <div className={classes.FlowerPreview}>
    <div className={classes.color}>
    <div className={classes.click}>
    <div className={classes.name}> {[result]}</div>
    </div></div>
    <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default FlowerPreview;