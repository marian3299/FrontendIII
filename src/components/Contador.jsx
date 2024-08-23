import { useState } from "react";
import CardStyles from "../styles/Card.module.css";
import Button from "./Button";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador+1)
    console.log(contador);
    
  }

  const restar = () => {
    setContador(contador-1);
    console.log(contador);
  }


  return (
    <div className={CardStyles.btnGroup}>
      <Button onClick={restar}>-</Button>
      <h4>{contador}</h4>
      <Button onClick={sumar}>+</Button>
    </div>
  );
};

export default Contador;
