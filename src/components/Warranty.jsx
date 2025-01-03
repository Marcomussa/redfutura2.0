import React from 'react'
import Slider from "../components/SliderWarranty"
import { BsArrowRight } from "react-icons/bs";

const Warranty = () => {
    return (
        <>
            <div className="container-fluid bg-warranty pb-5 pt-lg-5 bg-warranty">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className='fs-titles pb-5'>Nuestra Garantia</h2 >
                    </div>
                </div>
                <div className="row">
                    {/* Slider */}
                    <Slider></Slider>
                </div>
                <div className="row">
                    <div className='col-12 text-center pt-5'>
                        <button className='btn-blue py-3 px-4 rounded-pill'>
                            <span className='animation-btn'>Ver Integrantes</span>
                            <span className='animation-btn-link'><BsArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warranty