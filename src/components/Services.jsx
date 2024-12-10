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
                        <h3 className='fs-1 bold-services'>Compra al Mejor Precio en bazar, muebles y hogar.</h3>
                        <p className='text-white fs-4 pt-2'>Obtené acceso a listas de precio en tiempo real.</p>
                    </div>
                </div>

                {/* Cards */}
                <div className="row services-row position-relative justify-content-center px-5">
                    <div className="col-lg-4">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={MembersImg} alt="Members" />
                            </div>
                            <div className='card-content'>
                                <h3 className='fs-5 mb-4 px-2'>Únete a más de 100 socios</h3>
                                <p className='text-white px-2'>Aumenta tu poder de negociación y mejora márgenes con compras grupales e importaciones directas.</p>
                                <button className='btn-transp px-3 py-2 ms-2 mt-4'>
                                    <span className=' fs-5 animation-btn'>Ver Integrantes</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={Proveedores} alt="Proveedores" />
                            </div>
                            <div className='card-content'>
                                <h3 className='fs-5 pe-5 ps-2'>Acceso a proveedores clave en Argentina</h3>
                                <p className='text-white px-2 pt-2'>Disfruta de descuentos exclusivos y deja en nuestras manos la gestión de tus cuentas.</p>
                                <button className='btn-transp px-3 py-2 ms-2 mt-4'>
                                    <span className=' fs-5 animation-btn'>Ver Proveedores</span>
                                    <span className='animation-btn-link'><BsArrowRight /></span>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card rounded-5 text-white">
                            <div className='card-img'>
                                <img src={Contact} alt="Contact" />
                            </div>
                            <div className="card-content">
                                <h3 className='fs-5 mb-4 px-2'>Acesoramiento personalizado</h3>
                                <p className='text-white px-2'>Expertos en economía, contaduría y marketing, respaldados por 30 años de experiencia.</p>
                                <button className='btn-transp px-3 py-2 ms-2 mt-4'>
                                    <span className=' fs-5 animation-btn'>Contactanos</span>
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