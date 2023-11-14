
import ItemCategoria from "./ItemCategoria";
import { useCategorias } from "../../customHooks/useCategorias"

function Categorias() {

  const {categorias} = useCategorias()

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
                  nombre={cat.nombre}
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
