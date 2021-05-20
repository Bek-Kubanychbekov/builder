import Button from "../../UI/Button/Button";
import FlowerControl from "./FlowerControl/FlowerControl"
import classes from "./FlowerControls.module.css";

const FlowerControls = ({
  flowers,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const flower in flowers) {
  total += flowers[flower];
  results.push(<FlowerControl
  key={flower}
  count={flowers[flower]}
  type={flower} />)
  }

  return (
  <div className={classes.FlowerControls}>
  <strong >Bouquets</strong>
  {results}
  <Button disabled={!total} onClick={startOrdering}>Order</Button>
  </div>
  );
}

export default FlowerControls;