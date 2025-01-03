import React from 'react'
import ImgAbout from "../public/images/about-us-one.webp"
import ImgMision from "../public/images/about-us-two.png"
const AboutUs = () => {
    return (
        <>
            <div className="container-fluid position-relative container-pd pt-lg-5 bg-about-us ">
                <div className="row bg-blue position-relative text-center">
                    <div className="col-12 pt-5 mt-lg-4 mt-3">
                        <h3 className='fw-bold size-about-blue'>La Red de Compras de Mayor crecimiento en los últimos años.</h3>
                        <p className='text-white pt-2 fs-service-sub'>Nuestra misión, es ayudarte a crecer</p>
                    </div>
                </div>

                <div className="row services-row position-relative justify-content-center rounded-container bg-light shadow mb-5">

                    <div className="col-xl-5 col-md-12 rounded-2 p-0">
                        <img src={ImgAbout} alt="" className='about-img-size'/>
                    </div>
                    <div className="col-xl-7 col-md-12 p-3 px-lg-5 text-about rounded-5" >
                        <p className='text-about'>Red Futura nació en 2019 para facilitar la compra a pequeñas y medianas empresas dedicadas a artículos para el hogar, muebles y tecnología.</p>
                        <p className='text-about pt-3'>Con más de 100 comercios en 21 provincias, todos atendidos por sus dueños, ofrecemos un enfoque personalizado y único. Contamos con expertos en economía, contaduría y administración, brindando asesoramiento directo en todas las áreas de tu negocio.</p>
                    </div>
                </div>

                <div className="row services-row position-relative justify-content-center rounded-container bg-light shadow">
                    <div className="col-xl-5 col-md-12 rounded-2 p-0" >
                        <img src={ImgMision} alt="" className='about-img-size'/>
                    </div>
                    <div className="col-xl-7 col-md-12 p-3 px-lg-5 text-about rounded-5">
                        <p className='text-about'>En Red Futura, nuestra misión es ofrecer a nuestros miembros acceso a oportunidades comerciales exclusivas, evitando intermediarios y facilitando compras directas con fabricantes.</p>
                        <p className='text-about pt-3'>Apoyamos la búsqueda de nuevos negocios, proveedores y ofertas, ayudando a reducir costos y mejorar la rentabilidad de los comercios para que puedan competir al más alto nivel.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs