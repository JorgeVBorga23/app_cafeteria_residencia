import { redirect } from "react-router-dom";
import "./restaurante.css";


function ItemProducto(props) {
  let url_api = "http://localhost:3000/carrito/guardar";
  let añadirProducto = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  let handleClick = (event) => {
    event.preventDefault();
    let cantidad = event.target.cantidad.value;
    let idProducto = event.target.idProducto.value;
    let subtotal = props.precio * cantidad;
    añadirProducto(url_api, {
      identificador: "prueba1",
      idProducto: idProducto,
      cantidad: cantidad,
      subtotal: subtotal,
      comentarios: "Ninguno",
    })
      .then((response) => {
        let mensaje = response.mensaje
        let identificadorUsuario = response.idUsuario
        localStorage.setItem("idCarrito", identificadorUsuario)
        alert(mensaje)
        console.log(response);
        return redirect("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="tarjetaProducto">
        <h2>{props.nombre}</h2>
        <h5>Precio: ${props.precio}</h5>
        <h5>Descripcion: {props.descripcion}</h5>
        <form onSubmit={handleClick}>
          <input
            type="text"
            value={props.id}
            hidden
            disabled
            name="idProducto"
          />
          <label htmlFor="cantidad">Cantidad</label>
          <input
            name="cantidad"
            type="number"
            required
            min={1}
            max={10}
            defaultValue={1}
          />
          <input type="submit" value="Añadir al carrito" />
        </form>
      </div>
    </>
  );
}
export default ItemProducto;
