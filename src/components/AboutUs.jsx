import React from 'react'

const AboutUs = () => {
  return (
    <>
    <div className="container position-relative">
        <div className="row bg-blue position-relative text-center">
            <div className="col-12 pt-5">
                <h3 className='fw-bold fs-1'>La Red de Compras de Mayor crecimiento en los últimos años.</h3>
                <p className='text-white fs-3 pt-2'>Nuestra misión, es ayudarte a crecer</p>
            </div>
        </div>
        <div className="row services-row position-relative justify-content-center px-4">
            <div className="col-5">
                <h4>Quienes somos?</h4>
            </div>
            <div className="col-7">
                <p>Red Futura nació en 2019 para facilitar la compra a pequeñas y medianas empresas dedicadas a artículos para el hogar, muebles y tecnología.</p>
                <p>Con más de 100 comercios en 21 provincias, todos atendidos por sus dueños, ofrecemos un enfoque personalizado y único. Contamos con expertos en economía, contaduría y administración, brindando asesoramiento directo en todas las áreas de tu negocio.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-5">
                <h4>Nuestra Mision</h4>
            </div>
            <div className="col-7">
                <p>En Red Futura, nuestra misión es ofrecer a nuestros miembros acceso a oportunidades comerciales exclusivas, evitando intermediarios y facilitando compras directas con fabricantes.</p>
                <p>Apoyamos la búsqueda de nuevos negocios, proveedores y ofertas, ayudando a reducir costos y mejorar la rentabilidad de los comercios para que puedan competir al más alto nivel.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutUs