import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const RecipesStates = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const apiKey = "be44d1bca5854d41ba54b09501c66a26";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => {
      setRecipes(res.data.recipes);
    });
  }, []);

  return (
    <RecipesStates.Provider value={{ cart, setCart, recipes }}>
      {children}
    </RecipesStates.Provider>
  );
};

export default Context;

export const useRecipeStates = () => useContext(RecipesStates);
