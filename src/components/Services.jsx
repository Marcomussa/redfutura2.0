import React from 'react'
import MembersImg from "../public/images/members_.webp"
import Proveedores from "../public/images/comercio_.webp_1.webp"
import Contact from  "../public/images/suppliers.webp"
import { BsArrowRight } from "react-icons/bs";

const Services = () => {
    return (
        <>
            <div className="container-fluid position-relative container-pd  pt-0 mt-5 pt-lg-0 mt-lg-0">
                {/* Fondo */}
                <div className="row bg-blue position-relative text-center">
                    <div className="col-lg-12 pt-5">
                        <h3 className='fs-service pt-4 pt-lg-3'>Compra al Mejor Precio en bazar, muebles y hogar.</h3>
                        <h2 className='fs-service-sub text-white pt-lg-2 pt-4'>Obtené acceso a listas de precio en tiempo real.</h2>
                    </div>
                </div>

                {/* Cards */}
                <div className="row services-row position-relative justify-content-center row-service">
                    <div className="col-lg-4 p-lg-0">
                        <div className="card text-white mb-5 mb-lg-0">
                            <div className='card-img'>
                                <img src={MembersImg} alt="Members" />
                            </div>
                            <div className='card-content'>
                                <h3 className='mb-4 px-1 fs-4'>Únete a más de 100 socios</h3>
                                <p className=' text-white px-2 pt-2'>Aumenta tu poder de negociación y mejora márgenes con compras grupales e importaciones directas.</p>
                                <button className='btn-transp px-lg-3 py-lg-2 pb-1 pe-3 ms-3 mt-4'>
                                    <span className='animation-btn'>Ver Integrantes</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 p-lg-0">
                        <div className="card text-white mb-5 mb-lg-0">
                            <div className='card-img'>
                                <img src={Proveedores} alt="Proveedores" />
                            </div>
                            <div className='card-content'>
                                <h3 className='pe-5 mb-3 ps-1 fs-4'>Acceso a proveedores clave en Argentina</h3>
                                <p className='text-white px-2 pt-2'>Disfruta de descuentos exclusivos y deja en nuestras manos la gestión de tus cuentas.</p>
                                <button className='btn-transp px-lg-3 py-lg-2 pb-1 pe-3 ms-3 mt-4'>
                                    <span className=' animation-btn'>Ver Proveedores</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4 p-lg-0">
                        <div className="card  text-white">
                            <div className='card-img'>
                                <img src={Contact} alt="Contact" />
                            </div>
                            <div className="card-content">
                                <h3 className='mb-4 px-2 fs-4'>Acesoramiento personalizado</h3>
                                <p className='text-white px-2 pt-2'>Expertos en economía, contaduría y marketing, respaldados por 30 años de experiencia.</p>
                                <button className='btn-transp px-lg-3 py-lg-2 pb-1 pe-3 ms-3 mt-4'>
                                    <span className=' animation-btn'>Contactanos</span>
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