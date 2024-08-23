import Button from "./Button";
import CardStyles from '../styles/Card.module.css';
import Contador from "./Contador";

const Card = ({recipe, cart, setCart}) => {
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.imagen} className={CardStyles.cardImg} />
      <h3>{recipe.tipo}</h3>
      <h4>{recipe.precio}</h4>
      <Contador />
      <Button onClick={() => setCart([...cart, recipe])}>🛒</Button>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
