import { useEffect, useState } from "react";
import Navegacion from "./Navegacion";
import { useParams } from "react-router-dom";
import ItemProducto from "./ItemProducto"
function DetalleCategoria() {
    const {id} = useParams()
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        
            fetch("http://localhost:3001/categoria/lista-productos/"+id)
              .then((respuesta) => respuesta.json())
              .then((datos) => {
                console.log(datos)
                setProductos(datos);
              })
              .catch((err) => console.log(err));
        
    },[])

  return (
    <>
      <Navegacion />

      <h1>
        Categoria {id}
      </h1>


      <p>Aqui van los productos</p>

    {productos.map(prod =>{
        return <ItemProducto key={prod.id} id={prod.id} nombre={prod.name} precio={prod.price} descripcion={prod.description} />
    })}


    </>
  );
}

export default DetalleCategoria;
