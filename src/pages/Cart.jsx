import Card from "../components/Card";
import { useRecipeStates } from "../context/Context";

const Cart = () => {
  const { cart } = useRecipeStates();
  console.log(cart);
  return (
    <div>
      <h2>Recetas agregadas al carrito</h2>
      {cart.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Cart;
