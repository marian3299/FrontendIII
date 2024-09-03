import Button from "./Button";
import CardStyles from "../styles/Card.module.css";
import Contador from "./Contador";
import { Link } from "react-router-dom";

const Card = ({ recipe, cart, setCart }) => {
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.image} className={CardStyles.cardImg} />
      <h3>{recipe.title}</h3>
      <h4>${recipe.pricePerServing}</h4>
      <Contador />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Link to={"detail/" + recipe.id}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Card;
