import Card from "../components/Card";
import { useRecipeStates } from "../context/Context";

const Home = () => {
  const { state } = useRecipeStates();

  return (
    <>
      <h1>Lista de Recetas</h1>
      <div className="list-container">
        {state.recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
