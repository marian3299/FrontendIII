import "./styles/App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { routes } from "./utils/rutes";
import NavBar from "./components/NavBar";
import Detail from "./pages/Detail";
import ParentComponent from "./clase13/ParentComponent";
import Lobo from "./clase13/Lobo";
import Context from "./clase13/Context";

function App() {
  //const [toggle, setToggle] = useState(true);

  return (
    <>
      {/* Envolvemos dentro de Context los componente que queremos que reciban la info de Context */}
      <Context>
        <ParentComponent />
        <Lobo />
      </Context>

      {/* <NavBar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404: Page not found</h1>}
        />
      </Routes> */}
    </>
  );
}

export default App;
