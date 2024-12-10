import React, { useRef } from 'react'
import { Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r9vd3bc', 'template_k6ygnuc', form.current, {
        publicKey: 'M7RP6NNavWrRHCLOX',
      })
      .then(
        () => {
          console.log('Enviado!');
          form.current.reset();
        },
        (error) => {
          console.log('Error...', error.text);
        },
      );
  };
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
            <Form className='px-5 d-flex flex-column gap-4' ref={form} onSubmit={sendEmail}>
              <div>
                <input type="text" placeholder="Nombre y Apellido" className='inputs-form px-5 py-3 rounded-4' name='user_name'/>
              </div>
              <div>
                <input type="email" placeholder="Email" className='inputs-form px-5 py-3 rounded-4' name='user_email' />
              </div>
              <div>
                <input type="text" placeholder="Teléfono" className='inputs-form px-5 py-3 rounded-4' name='user' />
              </div>
              <div>
                <input as="textarea" placeholder="Mensaje" className='inputs-form text-area px-5 pt-3  rounded-4' name='message' />
              </div>
              <div>
                <button className='btn-red py-3 px-5 rounded-pill fs-5 mt-5 w-auto' type="submit" value="Send">
                  <span className='animation-btn'>Enviar</span>
                  <span className='animation-btn-link'><BsArrowRight /></span>
                </button>
              </div>

            </Form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact