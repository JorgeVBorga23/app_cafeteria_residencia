import { useEffect, useState } from "react";
import ItemCategoria from "./ItemCategoria";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categoria")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setCategorias(datos);
      })
      .catch((err) => console.log(err));
  }, []);

  const tarjeta = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <br />
      <h2 className="text-center">Nuestro Menú</h2>
      <br />
      <div className="row">
        <div className="grid-categorias">
          {categorias.map((cat) => {
            return (
              <a key={cat.id} style={tarjeta} href={"/categoria/" + cat.id}>
                <ItemCategoria
                  className="col-1"
                  id={cat.id}
                  nombre={cat.name}
                />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Categorias;
