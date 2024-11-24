import React from 'react'
import { Form } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-lg-12 main-text">
            <h2 className='fw-bolder py-4'>Te ayudamos a impulsar el crecimiento de tu negocio!</h2>
            <p className='pb-5'>Sumate a Red Futura y enterate de todas nuestras novedades.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Form className='px-5'>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Nombre y Apellido" className="py-3" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="email" placeholder="Email" className="py-3" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Teléfono" className="py-3" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={4} placeholder="Mensaje" className="py-3" />
              </Form.Group>
            </Form>
            <button className='btn-red py-3 px-5 rounded-pill fs-3'>
              <span className='animation-btn'>Enviar</span>
              <span className='animation-btn-link'><BsArrowRight/></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact