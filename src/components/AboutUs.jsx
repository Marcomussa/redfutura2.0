import React from 'react'
const AboutUs = () => {
    return (
        <>
            <div className="container-fluid position-relative container-service pt-5  content-about">
                <div className="row bg-blue position-relative text-center">
                    <div className="col-12 pt-5 mt-lg-4">
                        <h3 className='fw-bold size-about-blue'>La Red de Compras de Mayor crecimiento en los últimos años.</h3>
                        <p className='text-white pt-2 fs-service-sub'>Nuestra misión, es ayudarte a crecer</p>
                    </div>
                </div>

                <div className="row services-row position-relative justify-content-center rounded-container mb-5 m-0 m-md-1">
                    <div className="col-xl-5 col-md-12 bg-arg rounded-5 size-about shadow mb-lg-2" style={{ width: '30%', height: '50vh' }} >
                        <h4 className='text-overlay'>Quienes somos?</h4>
                    </div>
                    <div className="col-xl-7 col-md-12 p-3 p-lg-5 text-about rounded-5 shadow mb-2 bg-light" >
                        <p className='text-about'>Red Futura nació en 2019 para facilitar la compra a pequeñas y medianas empresas dedicadas a artículos para el hogar, muebles y tecnología.</p>
                        <p className='text-about'>Con más de 100 comercios en 21 provincias, todos atendidos por sus dueños, ofrecemos un enfoque personalizado y único. Contamos con expertos en economía, contaduría y administración, brindando asesoramiento directo en todas las áreas de tu negocio.</p>
                    </div>
                </div>

                <div className="row services-row position-relative justify-content-center rounded-container m-0 m-md-1">
                    <div className="col-xl-5 bg-mision rounded-5 size-about shadow mb-lg-2" style={{ width: '30%', height: '50vh' }} >
                        <h4 className='text-overlay'>Nuestra Mision</h4>
                    </div>
                    <div className="col-xl-7 p-3 p-lg-5 shadow rounded-5 mb-2">
                        <p className='text-about'>En Red Futura, nuestra misión es ofrecer a nuestros miembros acceso a oportunidades comerciales exclusivas, evitando intermediarios y facilitando compras directas con fabricantes.</p>
                        <p className='text-about'>Apoyamos la búsqueda de nuevos negocios, proveedores y ofertas, ayudando a reducir costos y mejorar la rentabilidad de los comercios para que puedan competir al más alto nivel.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs