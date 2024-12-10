import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SliderLearnMore from "../components/SliderLearnMore"

const LearnMore = () => {
    return (
        <>
            <div className="container-fluid pt-5 pb-5 mb-5 px-5">
                <div className="row">
                    <div className="col-lg-6 col-12 py-5 text-center text-lg-start">
                        <h1 className='fw-bolder'>La Red de Compras Experta en Tecnología y Hogar.</h1>
                        <h2 className='pt-3 pb-5 fs-4'>Más de 110 comercios ya conectados a proveedores nacionales e internacioles.</h2>
                        <button className='btn-red py-3 px-4 mt-3 rounded-pill fs-5'>
                            <span className='animation-btn'>Conocé más</span>
                            <span className='animation-btn-link'><BsArrowRight/></span>
                        </button>
                        {/* Slider Brands */}
                    </div>
                    <div className="col-lg-6 col-12">
                        <SliderLearnMore></SliderLearnMore>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnMore