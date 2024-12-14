import React from 'react'
import MembersImg from "../public/images/members_.png"
import Proveedores from "../public/images/comercio_.webp_1.webp"
import Contact from  "../public/images/suppliers.webp"
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
    return (
        <>
            <div className="container-fluid position-relative px-5">
                {/* Fondo */}
                <div className="row bg-blue position-relative text-center">
                    <div className="col-lg-12 pt-5">
                        <h3 className='fs-service fw-bolder'>Compra al Mejor Precio en bazar, muebles y hogar.</h3>
                        <h2 className='fs-service-sub text-white pt-2'>Obtené acceso a listas de precio en tiempo real.</h2>
                    </div>
                </div>

                {/* Cards */}
                <div className="row services-row position-relative justify-content-center row-service">
                    <div className="col-lg-4 p-lg-0">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={MembersImg} alt="Members" />
                            </div>
                            <div className='card-content'>
                                <h3 className=' mb-4 px-2 fs-4 fw-bolder'>Únete a más de 100 socios</h3>
                                <p className=' text-white px-2'>Aumenta tu poder de negociación y mejora márgenes con compras grupales e importaciones directas.</p>
                                <button className='btn-transp px-lg-3 py-lg-3 ps-3 ms-2 mt-4 mb-2'>
                                    <span className=' fs-4 animation-btn'>Ver Integrantes</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-lg-0">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={Proveedores} alt="Proveedores" />
                            </div>
                            <div className='card-content'>
                                <h3 className='pe-5 ps-2 fs-4 fw-bolder'>Acceso a proveedores clave en Argentina</h3>
                                <p className='text-white px-2 pt-2'>Disfruta de descuentos exclusivos y deja en nuestras manos la gestión de tus cuentas.</p>
                                <button className='btn-transp px-lg-3 py-lg-3 ps-3 ms-2 mt-4 mb-2'>
                                    <span className='fs-4 animation-btn'>Ver Proveedores</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 p-lg-0">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={Contact} alt="Contact" />
                            </div>
                            <div className="card-content">
                                <h3 className='mb-4 px-2 fs-4 fw-bolder'>Acesoramiento personalizado</h3>
                                <p className='text-white px-2'>Expertos en economía, contaduría y marketing, respaldados por 30 años de experiencia.</p>
                                <button className='btn-transp px-lg-3 py-lg-3 ps-3 ms-2 mt-4 mb-2'>
                                    <span className='fs-4 animation-btn'>Contactanos</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services