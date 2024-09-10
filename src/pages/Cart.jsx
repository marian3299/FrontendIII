import Card from "../components/Card";
import { useRecipeStates } from "../context/Context";

const Cart = () => {
  const { state } = useRecipeStates();
  return (
    <div>
      <h2>Recetas agregadas al carrito</h2>
      {state.cart.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Cart;
