import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SliderLearnMore from "../components/SliderLearnMore"
import MobileSlider from "../public/images/mobile-slider.jpg"

const LearnMore = () => {
    return (
        <>
            <div className="container-fluid pt-5 pb-lg-5 px-lg-5 mb-0 mb-lg-3 bg-learn">
                <div className="row">
                    <div className="col-lg-6 col-12 py-lg-5 py-0 ps-lg-5 text-center text-lg-start">
                        <h1 className='mt-lg-5 fs-learn-title'>Somos una Red de Compras especializada en Tecnologia, Muebles y Hogar.</h1>
                        <h2 className='pt-lg-4 pb-lg-5 fs-learn-subtitle'>Más de 130 comercios ya son parte, conectando con proveedores y mejorando márgenes.</h2>
                        <div className='pt-3 pb-4'>
                            <button className='btn-red py-lg-4 py-3 px-lg-5 mt-lg-5 rounded-pill'>
                                <span className='animation-btn'>Conocé más</span>
                                <span className='animation-btn-link'><BsArrowRight /></span>
                            </button>   
                        </div>
                        {/* Slider Brands */}
                    </div>
                    <div className="col-lg-6 col-12">
                        <div>
                            <SliderLearnMore></SliderLearnMore>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LearnMore