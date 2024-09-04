import { useSalarioStates } from "./Context";
import lobo from "./lobo.png";

const Lobo = () => {
  const { salario } = useSalarioStates();
  return (
    <div className="lobo-estepario">
      <img src={lobo} alt="lobo" className="lobo" />
      <h3>Total: {salario * 6}</h3>
    </div>
  );
};

export default Lobo;
