function Navegacion() {
  return (
    <>
      {/*Navegacion (debe ser un componente)*/}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Cafeteria
          </a>
          <a href="/login">
            <button className="btn btn-sm btn-outline-warning" type="button">
              Iniciar Sesion
            </button>
          </a>
        </div>
      </nav>
    </>
  );
}
export default Navegacion;
