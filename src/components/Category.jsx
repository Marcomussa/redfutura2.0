import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Slider from "../components/Slider"

const category = () => {
    return (
        <>
            <div className="container-fluid text-center p-5 pt-0">
                <div className="row">
                    <div className="col-12">
                        <h2 className='fw-bolder pb-5'>Categorias de Producto</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mobile-slider">
                        {/* Slider De Productos */}
                        <Slider></Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-3">
                        <button className='btn-blue py-3 px-4 rounded-pill fs-5'>
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