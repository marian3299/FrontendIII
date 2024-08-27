import Card from "./Card";
import pizzas from "../utils/Pizzas.js";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);
  console.log(cart);

  const apiKey = "be44d1bca5854d41ba54b09501c66a26";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <>
      {/* <div>
        <h2>Pedidos</h2>
        <ul>
          {cart.map((pedido,index) => (
            <li key={index}>{pedido.tipo}</li>
          ))}
        </ul>
      </div> */}
      <h1>Lista de Pizzas</h1>
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
