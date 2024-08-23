import { useState } from "react";
import Message from "./Message";

const Form = () => {
  //const [name, setName] = useState("");
  //const [address, setAddress] = useState("");

  const [costumer, setCostumer] = useState({
    name: "",
    address: ""
  })

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setCostumer({...costumer, name: e.target.value});
  };

  const handleChangeAddress = (e) => {
    setCostumer({...costumer, address: e.target.value});
  };

  const reset = () => {
    setCostumer({
      name: "",
      address: ""
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const numRegex = /[0-9]/;

    if (costumer.name.trim().length > 3 && numRegex.test(costumer.address) ) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      {show ? (
        <Message costumer={costumer} />
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <label>Nombre: </label>
            <input type="text" onChange={handleChangeName} value={costumer.name} />
            <label>Direccion: </label>
            <input type="text" onChange={handleChangeAddress} value={costumer.address} />
            <button>Enviar</button>
          </form>
          <button onClick={reset}>Reset form</button>
        </>
      )}
      {error && (
        <h4 style={{ color: "red" }}>
          Error: Por favor, coloque la informacion correctamente
        </h4>
      )}
    </>
  );
};

export default Form;
