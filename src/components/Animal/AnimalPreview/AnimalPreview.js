import AnimalAll from "../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";


const AnimalPreview = ({ ingredients,price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<AnimalAll key={[ingredient + i]} type={[ingredient]} />)
    }
  }

  return (
    <div className={classes.AnimalPreview}>
      <div
        className={classes.color}>
          <div className={classes.name}> {[result]}</div>
       
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default AnimalPreview;