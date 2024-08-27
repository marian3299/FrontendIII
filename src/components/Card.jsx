import Button from "./Button";
import CardStyles from "../styles/Card.module.css";
import Contador from "./Contador";

const Card = ({ recipe, cart, setCart }) => {
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.image} className={CardStyles.cardImg} />
      <h3>{recipe.title}</h3>
      <h4>${recipe.pricePerServing}</h4>
      <Contador />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
