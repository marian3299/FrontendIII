import Button from "./Button";
import CardStyles from "../styles/Card.module.css";
import Contador from "./Contador";
import { Link } from "react-router-dom";
import { useRecipeStates } from "../context/Context";

const Card = ({ recipe }) => {
  const { setCart } = useRecipeStates();
  return (
    <div className={CardStyles.cardContainer}>
      <img src={recipe.image} className={CardStyles.cardImg} />
      <h3>{recipe.title}</h3>
      <h4>${recipe.pricePerServing}</h4>
      <Contador />
      <Button onClick={() => setCart((prevState) => [...prevState, recipe])}>
        🛒
      </Button>
      <Link to={"detail/" + recipe.id}>
        <Button>Ver detalle</Button>
      </Link>
    </div>
  );
};

export default Card;
