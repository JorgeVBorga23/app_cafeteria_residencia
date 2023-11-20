import { useListaAlimentos } from "../../customHooks/useListaAlimentos"
import { useCategoria } from "../../customHooks/useCategoria";
import Navegacion from "./Navegacion";
import { useParams } from "react-router-dom";
import ItemProducto from "./ItemProducto"
import "./restaurante.css"

function DetalleCategoria() {
  const { id } = useParams()
  const { alimentos } = useListaAlimentos(id)
  const { categoria } = useCategoria(id)


  return (
    <>
      <Navegacion />

      <div className="container">
        <h1 className="text-center mt-2 mb-4">
          Categoria {categoria.nombre}
        </h1>

       <div className="grid-alimentos">
       {alimentos.map(alimento => {
          return <ItemProducto key={alimento.id} id={alimento.id} nombre={alimento.nombre} precio={alimento.precio}  />
        })}

       </div>


      </div>
    </>
  );
}

export default DetalleCategoria;
