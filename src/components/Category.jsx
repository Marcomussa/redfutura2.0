import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Slider from "../components/Slider"

const category = () => {
    return (
        <>
            <div className="container-fluid text-center px-xl-5 pt-0 bg-product">
                <div className="row">
                    <div className="col-12 pb-lg-4">
                        <h2 className='pb-5 fs-titles'>Categorias de Producto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mobile-slider">
                        {/* Slider De Productos */}
                        <Slider></Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-5 mt-4">
                        <button className='btn-blue py-3 px-4 mb-5 rounded-pill'>
                            <span className='animation-btn'>Ver Productos</span>
                            <span className='animation-btn-link'><BsArrowRight/></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default category