import { createContext, useContext, useState } from "react";

//Creamos el contexto
const SalarioStates = createContext();

const Context = ({ children }) => {
  //Declaramos los estados
  const [salario, setSalario] = useState(1510000);

  //Retornamos el Provider
  return (
    <>
      {/* Dentro de value vamos a colocar todos los elementos que queremos compartir */}
      <SalarioStates.Provider value={{ salario, setSalario }}>
        {children}
      </SalarioStates.Provider>
    </>
  );
};

export default Context;

//Funcion para llamar al context en varias partes del proyecto
export const useSalarioStates = () => useContext(SalarioStates);
