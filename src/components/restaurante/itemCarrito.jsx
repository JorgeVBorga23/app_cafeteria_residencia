import React, { useState } from 'react';
const ItemCarrito = ({ item }) => {

  const [cantidad, setCantidad] = useState(item.cantidad)

  const handleDecremento = () => {
    if (cantidad > 1) {

      setCantidad(cantidad - 1)
    }
  };

  const handleAumento = () => {
    setCantidad(cantidad + 1)
  };

  return (
    <>
      <th>{item.nombre}</th>
      <th>
        <div className="input-cantidad">
          <button className='btn btn-primary' onClick={handleDecremento}><i class="fa-solid fa-minus"></i></button>
          <input style={{ width: "3rem" }} type="number" value={cantidad} disabled />
          <button className='btn btn-primary' onClick={handleAumento}><i class="fa-solid fa-plus"></i></button>
        </div>
      </th>
      <th>${item.precio}</th>
      <th>${item.precio * cantidad}</th>
      <th><button className='btn btn-danger'>X</button></th>
    </>);
};

export default ItemCarrito;
