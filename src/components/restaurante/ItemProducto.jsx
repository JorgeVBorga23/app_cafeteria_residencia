import { redirect } from "react-router-dom";
import "./restaurante.css";
import React from 'react';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';


function ItemProducto(props) {
 let url_api = "http://localhost:3001/carrito/guardar";
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

return(
    <Card style={{ width: '18rem', borderRadius: '15px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Producto" style={{ borderRadius: '15px 15px 0 0' }} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
          Precio: ${props.precio}
        </Card.Text>
        <InputGroup className="mb-3">
        <InputGroup.Text id="cantidad">Cantidad</InputGroup.Text>
          <FormControl
            type="number"
            defaultValue={1}
            aria-label="Cantidad"
            aria-describedby="cantidad"
            style={{ borderRadius: '0 15px 15px 0' }}
          />
        </InputGroup>
        <Button variant="primary" style={{ borderRadius: '15px' }}>
          Añadir al Carrito
        </Button>
      </Card.Body>
    </Card>
)
}
export default ItemProducto;
