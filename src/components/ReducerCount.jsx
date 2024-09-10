import { useReducer } from "react";

//Funcion del reducer
const reducer = (state, action) => {
  switch (
    action.type //Dependiento del tipo de accion va a realizar cosas diferentes
  ) {
    case "increment":
      return { count: state.count + 1 }; //Retornamos el estado actualizado
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "random":
      return { count: action.payload }; //Accedemos al randomNum con el payload
    default:
      throw new Error();
  }
};

const initialState = { count: 0 }; //Estado inicial del reducer

const ReducerCount = () => {
  //Declaramos el reducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  return (
    <div>
      <h1>{state.count}</h1>
      {/* La funcion dispatch ejecuta la accion correspondiente en el reducer al clickear el button */}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      {/* Mandamos el numero aleatorio al reducer a traves de payload */}
      <button onClick={() => dispatch({ type: "random", payload: randomNum })}>
        Random
      </button>
    </div>
  );
};

export default ReducerCount;
