import Button from "../../UI/Button/Button";
import FlowerControl from "./FlowerControl/FlowerControl";
import classes from "./FlowersControls.module.css";

const FlowerControls = ({
  flowers,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const flower in flowers) {
  total += animals[animal];
  results.push(<FlowerControl
  key={flower}
  count={flowers[animal]}
  type={flower} />)
  }

  return (
  <div className={classes.FlowerControls}>
  <strong>Flowers</strong>
  {results}
  <Button disabled={!total} onClick={startOrdering}>Order</Button>
  </div>
  );
}

export default FlowerControls;