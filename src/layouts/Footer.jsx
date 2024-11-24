import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../public/images/redfutura_log.webp"
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="container-fluid px-5">
                <div className="row main-text">
                    <div className="col-lg-6">
                        <img src={Logo} alt="Logo" width={200} />
                        <ul className='list-unstyled d-flex flex-column gap-2'>
                            <li>Direccion</li>
                            <li>Telefono</li>
                            <li>Email</li>
                        </ul>
                        <div className='pt-3 pb-2 d-flex gap-3 '>
                            <a href="" className='fs-3'><BsLinkedin /></a>
                            <a href="" className='fs-3'><BsInstagram /></a>
                        </div>
                        <p>Copyigh © Enterpret Inc. 2024 All Rights Reserved</p>
                    </div>
                    <div className="col-lg-2 pt-5">
                        <h2 className='fw-bold fs-5 pb-3'>Empresa</h2>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li>Home</li>
                            <li>Integrantes</li>
                            <li>Proveedores</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 pt-5">
                        <h2 className='fw-bold fs-5 pb-3'>Productos</h2>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li>Linea Blanca</li>
                            <li>Pequenos Electrodomesticos</li>
                            <li>Audio</li>
                            <li>TV</li>
                            <li>Muebles</li>
                            <li>Bicicletas</li>
                        </ul>
                    </div>
                    <div className="col-lg-2 pt-5">
                        <h2 className='fw-bold fs-5 pb-3'>Resources</h2>
                        <ul className="list-unstyled d-flex flex-column gap-3">
                            <li>Privacy Policy</li>
                            <li>Terminos y Condiciones</li>
                            <li>Contactanos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer