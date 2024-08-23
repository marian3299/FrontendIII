import Card from "./Card";
import pizzas from '../utils/Pizzas.js'
import { useState } from "react";


const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart)

  return (
    <>
      <div>
        <h2>Pedidos</h2>
        <ul>
          {cart.map((pedido,index) => (
            <li key={index}>{pedido.tipo}</li>
          ))}
        </ul>
      </div>
      <h1>Lista de Pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card recipe={pizza} key={pizza.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </>
  );
};

export default Home;
