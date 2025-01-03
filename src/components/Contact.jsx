import React, { useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [buttonVisible, setButtonVisible] = useState(true);

  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_cuit: "",
    message: "",
  });

  const [formValidation, setFormValidation] = useState({
    user_name: null,
    user_email: null,
    user_phone: null,
    user_cuit: null,
    message: null,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "user_name":
        return value.trim().length >= 3;
      case "user_email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "user_phone":
        return /^\d+$/.test(value) && value.trim().length >= 7;
      case "user_cuit":
        return /^\d+$/.test(value) && value.trim().length === 11;
      case "message":
        return value.trim().length > 0;
      default:
        return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });

    setFormValidation({
      ...formValidation,
      [name]: validateField(name, value),
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isFormValid = Object.values(formValidation).every((valid) => valid === true);

    if (!isFormValid) {
      alert("Por favor verifique los datos!");
      return;
    }

    emailjs
      .sendForm("service_r9vd3bc", "template_k6ygnuc", form.current, "M7RP6NNavWrRHCLOX")
      .then(
        () => {
          alert("Datos Enviados con Exito!");
          setFormValues({ user_name: "", user_email: "", user_phone: "", user_cuit: "", message: "" });
          setFormValidation({ user_name: null, user_email: null, user_phone: null, user_cuit: null, message: null });
          form.current.reset();
          setButtonVisible(false);
        },
        (error) => {
          alert("Error...", error.text);
        }
      );
  };

  return (
    <>
      <div className="container-fluid form pb-5 bg-form">
        <div className="row text-center">
          <div className="col-lg-12 main-text">
            <h1 className='fw-bold fs-service'>Te ayudamos a impulsar el crecimiento de tu negocio!</h1>
            <h2 className='mb-lg-5 pb-5 mt-4 fs-service-sub'>Sumate a Red Futura y enterate de todas nuestras novedades.</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <Form className='px-lg-5 d-flex flex-column gap-lg-4 gap-3' ref={form} onSubmit={sendEmail}>
              <div>
                <input type="text" placeholder="Nombre y Apellido" value={formValues.user_name}
                  onChange={handleInputChange} className={`inputs-form px-5 py-4 rounded-4 ${formValidation.user_name === null
                    ? ""
                    : formValidation.user_name
                      ? "border-green"
                      : "border-red"
                    }`} name='user_name' />
              </div>
              <div>
                <input type="number" placeholder="Empresa/Cuit"
                  value={formValues.user_cuit}
                  onChange={handleInputChange} className={`inputs-form px-5 py-4 rounded-4 ${formValidation.user_cuit === null
                    ? ""
                    : formValidation.user_cuit
                      ? "border-green"
                      : "border-red"
                    }`} name='user_cuit' />
              </div>
              <div>
                <input type="number" placeholder="Teléfono"
                  value={formValues.user_phone}
                  onChange={handleInputChange} className={`inputs-form px-5 py-4 rounded-4 ${formValidation.user_phone === null
                    ? ""
                    : formValidation.user_phone
                      ? "border-green"
                      : "border-red"
                    }`} name='user_phone' />
              </div>
              <div>
                <input type="email" placeholder="Email" value={formValues.user_email}
                  onChange={handleInputChange} className={`inputs-form px-5 py-4 rounded-4 ${formValidation.user_email === null
                    ? ""
                    : formValidation.user_email
                      ? "border-green"
                      : "border-red"
                    }`} name='user_email' />
              </div>
              <div>
                <input as="textarea" placeholder="Mensaje" value={formValues.message}
                  onChange={handleInputChange} className={`inputs-form text-area px-5 pt-3 rounded-4 ${formValidation.message === null
                    ? ""
                    : formValidation.message
                      ? "border-green"
                      : "border-red"
                    }`} name='message' />
              </div>
              <div>
                {buttonVisible && (
                  <button className='btn-red py-3 px-lg-5 px-4 rounded-pill mt-lg-5 w-auto' type="submit" value="Send">
                    <span className='animation-btn'>Enviar</span>
                    <span className='animation-btn-link'><BsArrowRight /></span>
                  </button>
                )}
              </div>

            </Form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact