import "./App.css";
import Navegacion from "./restaurante/Navegacion";
import Carrusel from "./restaurante/Carrusel";
import CarruselPromociones from "./restaurante/CarruselPromociones"
import Categorias from "./restaurante/Categorias";
function App() {
  return (
    <>
      <Navegacion />
      <div className="container">
        <div className="row">
          <div className="col-md 6">
            <Carrusel />
            <CarruselPromociones/>
          </div>
          <div className="col-md 6">
            <Categorias/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
