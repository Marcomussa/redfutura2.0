import React from 'react'
import Slider from "../components/SliderWarranty"
import { BsArrowRight } from "react-icons/bs";

const Warranty = () => {
    return (
        <>
            <div className="container pb-5">
                <div className="row text-center ">
                    <div className="col-12">
                        <h2 className='fw-bolder'>Nuestra Garantia</h2 >
                    </div>
                </div>
                <div className="row">
                    {/* Slider */}
                    <Slider></Slider>
                </div>
                <div className="row">
                    <div className='col-12 text-center'>
                        <button className='btn-blue py-3 px-4 rounded-pill fs-5'>
                            <span className='animation-btn'>Ver Productos</span>
                            <span className='animation-btn-link'><BsArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Warranty