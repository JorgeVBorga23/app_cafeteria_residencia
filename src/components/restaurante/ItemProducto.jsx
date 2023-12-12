
import "./restaurante.css";
import React, { useEffect, useState } from 'react';
import { Card, Button, InputGroup, FormControl, Form } from 'react-bootstrap';



function ItemProducto({ id, nombre, precio, imagen }) {

  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("PRODUCTOS_CARRITO")) {
      const productos_carrito = JSON.parse(localStorage.getItem("PRODUCTOS_CARRITO"))
      const { items } = productos_carrito.carrito
      let encontrado = items.find((item) => {
        return item.id === id
      })
      if (encontrado) {
        setAgregado(true)
      }
    }
  }, [agregado])


  const handleCantidad = (event) => {
    const nuevoValor = parseInt(event.target.value, 10);
    if (!isNaN(nuevoValor)) {
      setCantidad(nuevoValor);
    }
  }

  let añadirCarrito = () => {

    const ITEM = {
      id, nombre, precio, cantidad
    }
    //verificamos si es el primer item que se agrega
    if (!localStorage.getItem("PRODUCTOS_CARRITO")) {
      const carrito = {
        items: [ITEM],
        subtotal: ITEM.cantidad * ITEM.precio
      }
      localStorage.setItem("PRODUCTOS_CARRITO", JSON.stringify({ "carrito": carrito }))
      setAgregado(true)
    } else {
      //es otro producto
      //obtenemos el arreglo
      const carrito_producto = JSON.parse(localStorage.getItem("PRODUCTOS_CARRITO"))
      const { items } = carrito_producto.carrito


      //calcumalos el nuevo subtotal
      let subtotal = items.reduce((acumulador, objeto) => {
        return acumulador + objeto.cantidad * objeto.precio
      }, 0)
      let subtotalnuevo = subtotal + (ITEM.cantidad * ITEM.precio)

      //agregamos el item al arreglo
      const carrito_nuevo = {
        items: [...items, ITEM],
        subtotal: subtotalnuevo
      }
      localStorage.setItem("PRODUCTOS_CARRITO", JSON.stringify({ "carrito": carrito_nuevo }))
      setAgregado(true)
    
    }
  }
  return (
    <Card style={{ width: '18rem', borderRadius: '15px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src={"http://recuerdosdeorizaba.ddns.net:3001" + imagen} alt="Producto" style={{ borderRadius: '15px 15px 0 0' }} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Precio: ${precio}
        </Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Text id="cantidad">Cantidad</InputGroup.Text>
          <FormControl
            onChange={handleCantidad}
            type="number"
            value={cantidad}
            aria-label="Cantidad"
            aria-describedby="cantidad"
            style={{ borderRadius: '0 15px 15px 0' }}
            min={1}
          />
        </InputGroup>


        {!agregado &&
          <Button variant="primary" style={{ borderRadius: '15px' }} onClick={() => { añadirCarrito() }} >
            Añadir al Carrito
          </Button>

        }
        {agregado && (
          <>
            <Button variant="success" style={{ borderRadius: '15px' }} disabled >
              Añadido
            </Button>

            <div className="agregado-button">
              En el carrito  <i className="fas fa-check"></i>
            </div>
          </>
        )}

      </Card.Body>
    </Card>
  )
}
export default ItemProducto;
