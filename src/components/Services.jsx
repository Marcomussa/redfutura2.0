import React from 'react'

const Services = () => {
    return (
        <>
            <div className="container position-relative">
                {/* Fondo */}
                <div className="row bg-blue position-relative text-center">
                    <div className="col-lg-12 pt-5">
                        <h3 className='fw-bold fs-1'>Compra al Mejor Precio en bazar, muebles y hogar.</h3>
                        <p className='text-white fs-3 pt-2'>Obtené acceso a listas de precio en tiempo real</p>
                    </div>
                </div>

                {/* Cards */}
                <div className="row services-row position-relative justify-content-center px-4">
                    <div className="col-md-4">
                        <div className="card bg-mem rounded-5 text-white px-4">
                            <h3 className='fw-bold mt-5 pt-5'>Únete a más de 100 socios</h3>
                            <p>Aumenta tu poder de negociación y mejora márgenes con compras grupales e importaciones directas.</p>
                            <button className='btn-transp'> <h3>Ver Integrantes</h3></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-prov rounded-5 text-white px-4">
                            <h3 className='fw-bold mt-5 pt-5'>Acceso a proveedores clave en Argentina</h3>
                            <p>Disfruta de descuentos exclusivos y deja en nuestras manos la gestión de tus cuentas.</p>
                            <button className='btn-transp'> <h3>
                                Ver Proveedores  </h3></button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card bg-contact rounded-5 text-white px-4">
                            <h3 className='fw-bold mt-5 pt-5'>Acesoramiento personalizado</h3>
                            <p>Expertos en economía, contaduría y marketing, respaldados por 30 años de experiencia.</p>
                            <button className='btn-transp'> <h3>Contactanos</h3></button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Services