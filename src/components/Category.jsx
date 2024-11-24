import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import Slider from "../components/Slider"

const category = () => {
    return (
        <>
            <div className="container-fluid text-center p-5 main-text">
                <div className="row">
                    <div className="col-12">
                        <h1 className='fw-bolder py-5'>Categorias de Producto</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {/* Slider De Productos */}
                        <Slider></Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-3">
                        <button className='btn-blue py-3 px-5 rounded-pill fs-4'>
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