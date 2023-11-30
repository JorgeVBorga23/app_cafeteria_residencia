import { useLocation, useNavigate } from "react-router-dom";
import Carrito from "./Carrito"
import "./custom.css"
function Navegacion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const alimentos = JSON.parse(localStorage.getItem("PRODUCTOS_CARRITO"))
  

  const cerrarSesion = () => {
    navigate("/", { state: null });
  };
  return (
    <>
      {/*Navegacion (debe ser un componente)*/}
      <div class="container-fluid p-0 nav-bar">
      <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
        <div className="container-fluid">
          <a className="navbar-brand px-lg-4 m-0" href="/">
          <h1 class="m-0 display-4 text-uppercase text-white">Cafeteria</h1>
          </a>


          {/*Independiente de si esta logeado o no, mostrar el boton de carrito */}
            {alimentos &&  <Carrito alimentos={alimentos} />}
        
          {/*Si existe un login mostrar esto */}

          {state?.logged && state?.rol == "CLIENTE" && (
            <>
              <span className="text-white">{state.nombre}</span>{" "}
              <a href="/pedidos">
                <button
                  className="btn btn-sm btn-outline-primary"
                  type="button"
                >
                  Historial de pedidos
                </button>
              </a>
              <button
                onClick={cerrarSesion}
                className="btn btn-sm btn-outline-warning"
                type="button"
              >
                Cerrar Sesion
              </button>
            </>
          )}
          {!state?.logged && (
            <a href="/login">
              <button className="btn btn-sm btn-outline-warning" type="button">
                Iniciar Sesion
              </button>
            </a>
          )}
          
        </div>
        
      </nav>

      </div>
     
    </>
  );
}
export default Navegacion;
