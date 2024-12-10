import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    text: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      name: "",
      email: "",
      phone: "",
      text: "",
    });
  }
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })

  }

  return (
    <>
      <div className="container-fluid form py-5 bg-form">
        <div className="row text-center">
          <div className="col-lg-12 main-text">
            <h1 className='fw-bold'>Te ayudamos a impulsar el crecimiento de tu negocio!</h1>
            <h2 className='mb-5 pb-5 mt-4 fs-4'>Sumate a Red Futura y enterate de todas nuestras novedades.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Form className='px-5 d-flex flex-column gap-4' onSubmit={handleSubmit}>
              <div>
                <input type="text" placeholder="Nombre y Apellido" className='inputs-form px-5 py-3 rounded-4' />
              </div>
              <div>
                <input type="email" placeholder="Email" className='inputs-form px-5 py-3 rounded-4' />
              </div>
              <div>
                <input type="text" placeholder="Teléfono" className='inputs-form px-5 py-3 rounded-4' />
              </div>
              <div>
                <input as="textarea" placeholder="Mensaje" className='inputs-form text-area px-5 pt-3  rounded-4' />
              </div>
              {/* 
              <Form.Group className="mb-4">
                <Form.Control type="text"
                  placeholder="Nombre y Apellido"
                  className="py-3"
                  value={form.name}
                  onChange={handleForm}
                  name="name" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="email"
                  placeholder="Email"
                  className="py-3"
                  value={form.email}
                  onChange={handleForm}
                  name="email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text"
                  placeholder="Teléfono"
                  className="py-3"
                  value={form.phone}
                  onChange={handleForm}
                  name="phone" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control as="textarea"
                  rows={4}
                  placeholder="Mensaje"
                  className="py-3"
                  value={form.text}
                  onChange={handleForm}
                  name="text" />
              </Form.Group> */}
            </Form>
            <button className='btn-red py-3 px-5 rounded-pill fs-5 mt-5' type="submit">
              <span className='animation-btn'>Enviar</span>
              <span className='animation-btn-link'><BsArrowRight /></span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact