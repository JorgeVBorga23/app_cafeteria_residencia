function Login() {
  return (
    <>
      <br />
      <div className="container">
        <h1 className="text-center">Iniciar Sesion</h1>

        <div className="card container col-sm-8">
          <form action="" className="form">
            <div className="mb-3">
              <label className="form-label" htmlFor="usuario">
                Nombre de usuario:
                <input
                  className="form-control"
                  type="text"
                  id="usuario"
                  placeholder="Ingrese su nombre de usuario"
                />
              </label>
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="password">
                Contraseña
                <input
                  className="form-control"
                  type="password"
                  placeholder="Ingrese su contraseña"
                />
              </label>
            </div>

            <div className="mb-3">
              <input
                className="btn btn-success form-control mb-3"
                type="submit"
                value="Ingresar"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
