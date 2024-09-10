import axios from "axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

const RecipesStates = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return { ...state, recipes: action.payload };
    case "ADD_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "DELETE_CART":
      return {};
    default:
      return new Error("Accion no existente");
  }
};

const initialState = {
  cart: [],
  recipes: [],
};

const Context = ({ children }) => {
  //const [cart, setCart] = useState([]);
  //const [recipes, setRecipes] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const apiKey = "be44d1bca5854d41ba54b09501c66a26";
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&apiKey=" + apiKey;

  useEffect(() => {
    axios(url).then((res) => {
      //setRecipes(res.data.recipes);
      dispatch({ type: "GET_RECIPES", payload: res.data.recipes });
    });
  }, []);

  return (
    <RecipesStates.Provider value={{ state, dispatch }}>
      {children}
    </RecipesStates.Provider>
  );
};

export default Context;

export const useRecipeStates = () => useContext(RecipesStates);
