import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from "react";
import { useCategorias } from "../../customHooks/useCategorias"
import { useField } from "../../customHooks/useField"
const Productos = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { categorias } = useCategorias()
  

  const nombre = useField({type: "text"})

  const guardarAlimento = (e) => {
    e.preventDefault()
    console.log(e.target.value)

  }

  return (

    <>
      <div className="container">
        <br />
        <button onClick={handleShow} className="btn btn-success">Nuevo Alimento</button>


      </div>






      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Agregar un nuevo Alimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={guardarAlimento}>
            <Form.Group className="mb-3" controlId="form.nombre">
              <Form.Label className="text-primary">Nombre:</Form.Label>
              <Form.Control
                value={nombre.value}
                type={nombre.type}
                onChange={nombre.onChange}
                placeholder='ejemplo: "Baguette de..."'
                autoFocus
                required
                maxLength={100}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="form.categoria"
            >
              <Form.Label className="text-primary">Categoria:</Form.Label>
              <Form.Select required>
                {categorias.map((cat) => {
                  return (
                    <option key={cat.id} value={cat.id} >{cat.name}</option>
                  )
                })}
              </Form.Select>
            </Form.Group>


            <Form.Group className="mb-3" controlId="form.stock">
              <Form.Label className="text-primary" >Stock:</Form.Label>
              <Form.Control
                type="number"
                required
                min={1}
                max={10000}
                placeholder="ejemplo: 255"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="form.precio">
              <Form.Label className="text-primary">Precio de venta (MXN):</Form.Label>
              <Form.Control
                type="number"
                required
                min={1}
                max={10000}
                placeholder="ejemplo: 25.00"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="form.precio">
              <Form.Label className="text-primary">Descripción:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Acerca de tu alimento"
                style={{ height: '100px' }}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Imagen del Alimento:</Form.Label>
              <Form.Control type="file" accept="image/png, image/jpeg" />
            </Form.Group>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit" >
                Guardar Alimento
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>

      </Modal>

    </>
  )
}

export default Productos