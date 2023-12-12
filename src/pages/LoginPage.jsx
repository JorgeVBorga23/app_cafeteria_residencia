import React, { useState } from "react";
import Navegacion from "../components/restaurante/Navegacion";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleUsuarioChange = (e) => {
    setUsuario(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    // Preparar los datos para enviar en el cuerpo de la solicitud
    e.preventDefault();
    const data = {
      username: usuario,
      password: password,
    };

    // Realizar la solicitud POST a tu API
    fetch("http://recuerdosdeorizaba.ddns.net:3001/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Manejar la respuesta de la API
        if (data.success) {
          // Iniciar sesión exitosamente, redirigir o mostrar un mensaje de éxito
          setResponseMessage("Inicio de sesión exitoso");
          
          //verificamos si es admin o cliente
          if(data.rol == "CLIENTE"){
            navigate("/", {
              replace: true,
              state: {
                logged: true,
                nombre: data.nombre,
                rol: data.rol,
              },
            });
          }else{
            navigate("/admin", {
              replace: true,
              state: {
                logged: true,
                nombre: data.nombre,
                rol: data.rol,
              },
            });
          }
        } else {
          // Mostrar un mensaje de error
          setError("Error al iniciar sesión. Verifica tus credenciales.");
        }
      })
      .catch((error) => {
        console.error("Error de red:", error);
        setError("Error de red. Inténtalo de nuevo más tarde.");
      });
  };

  return (
    <>
      <Navegacion />
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="col-md-6">
          <h2>Iniciar Sesión</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {responseMessage && (
            <div className="alert alert-success">{responseMessage}</div>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="usuario" className="form-label">
                Usuario
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="usuario"
                value={usuario}
                onChange={handleUsuarioChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
