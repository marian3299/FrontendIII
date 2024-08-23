import "./styles/App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import LifeCycle from "./components/LifeCycle";
import { useState } from "react";
import DogFetch from "./components/DogFetch";
import CatAxios from "./components/CatAxios";

function App() {
  //const [toggle, setToggle] = useState(true);

  return (
    <>
      <DogFetch />
      <CatAxios />
      {/* <NavBar />
      <Form />
      <Home /> */}
      {/* {toggle && <LifeCycle />} */}
      
      {/* <button onClick={() => setToggle(!toggle)}>{toggle ? 'Desmontar' : 'Montar'}</button> */}
    </>
  );
}

export default App;
