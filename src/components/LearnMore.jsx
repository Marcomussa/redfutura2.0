import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const LearnMore = () => {
    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-lg-6 col-12 py-5 text-center text-lg-start">
                        <h1 className='fw-bolder'>La Red de Compras Experta en Tecnología y Hogar.</h1>
                        <h2 className='pt-3 pb-5'>Más de 110 comercios ya conectados a proveedores nacionales e internacioles.</h2>
                        <button className='btn-red py-3 px-5 rounded-pill fs-4'>
                            <span className='animation-btn'>Conocé más</span>
                            <span className='animation-btn-link'><BsArrowRight/></span>
                        </button>
                        {/* Slider Brands */}
                    </div>
                    <div className="col-lg-6 col-12">
                        {/* Slider Pictures */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnMore