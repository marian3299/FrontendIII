import Card from "../components/Card";
import { useRecipeStates } from "../context/Context";

const Home = () => {
  const { recipes } = useRecipeStates();

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
      <h1>Lista de Recetas</h1>
      <div className="list-container">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
