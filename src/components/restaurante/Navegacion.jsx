import { useLocation, useNavigate } from "react-router-dom";

function Navegacion() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    navigate("/", { state: null });
  };
  return (
    <>
      {/*Navegacion (debe ser un componente)*/}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cafeteria
          </a>
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
    </>
  );
}
export default Navegacion;
