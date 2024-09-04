import { useSalarioStates } from "./Context";

const ChildComponent = () => {
  const { salario, setSalario } = useSalarioStates();

  return (
    <div className="child">
      <h3>Child Component</h3>
      <p>Cuanto ganas por semestre?</p>
      <h3>Total: {salario * 6}</h3>
      <button onClick={() => setSalario(salario + 100000)}>
        Aumentar salario
      </button>
    </div>
  );
};

export default ChildComponent;
