import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { useSalarioStates } from "./Context";

const ParentComponent = () => {
  //const [salario, setSalario] = useState(150000);
  //console.log(useSalarioStates());

  //Accedemos a los valores del context
  //const { salario } = useSalarioStates();

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent />
      {/* <p>Salario: {salario}</p> */}
    </div>
  );
};

export default ParentComponent;
