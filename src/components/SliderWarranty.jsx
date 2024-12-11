import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/pagination';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={'3'}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: true,
        }}
        speed={1000}
        onSlideChange={(swiper) => {
          if (swiper.isEnd) {
            setTimeout(() => {
              swiper.slideTo(0, 500);
            }, 1500);
          }
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper-warranty py-5"
      >
        <SwiperSlide className='testimonial-card shadow position-relative firts-slider'>
          <div className='card-warranty p-4'>
            <div className="quote-icon mb-2">
              <i className="bi bi-quote"><RiDoubleQuotesL /></i>
            </div>
            <h2 className="mb-2 fs-5 fw-bolder">Quote</h2>
            <div className="stars mb-3">
              {'★ ★ ★ ★ ★'}
            </div>
            <p className="text-warranty">
              Estoy super contento con el grupo. Vivo en un pueblo muy pequeño y la única forma de competir con las grandes cadenas es a través de la red. Jorge siempre se preocupa y me ayuda a conseguir nuevos proveedores.
            </p>
          </div>
          <div className="card-footer p-3">
            <p className="mb-0 text-white" >Ricardo</p>
            <p className='mb-0 text-white'>Detalle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-card shadow position-relative'>
          <div className='card-warranty p-4'>
            <div className="quote-icon mb-2">
              <i className="bi bi-quote"><RiDoubleQuotesL /></i>
            </div>
            <h2 className="mb-2 fs-5 fw-bolder">Quote</h2>
            <div className="stars mb-3">
              {'★ ★ ★ ★ ★'}
            </div>
            <p className="text-warranty">
              Estoy super contento con el grupo. Vivo en un pueblo muy pequeño y la única forma de competir con las grandes cadenas es a través de la red. Jorge siempre se preocupa y me ayuda a conseguir nuevos proveedores.
            </p>
          </div>
          <div className="card-footer p-3">
            <p className="mb-0 text-white">Ricardo</p>
            <p className='mb-0 text-white'>Detalle</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='testimonial-card shadow position-relative'>
        <div className='card-warranty p-4'>
            <div className="quote-icon mb-2">
              <i className="bi bi-quote"><RiDoubleQuotesL /></i>
            </div>
            <h2 className="mb-2 fs-5 fw-bolder">Quote</h2>
            <div className="stars mb-3">
              {'★ ★ ★ ★ ★'}
            </div>
            <p className="text-warranty">
              Estoy super contento con el grupo. Vivo en un pueblo muy pequeño y la única forma de competir con las grandes cadenas es a través de la red. Jorge siempre se preocupa y me ayuda a conseguir nuevos proveedores.
            </p>
          </div>
          <div className="card-footer p-3">
            <p className="mb-0 text-white">Ricardo</p>
            <p className='mb-0 text-white'>Detalle</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='testimonial-card shadow position-relative'>
        <div className='card-warranty p-4'>
            <div className="quote-icon mb-2">
              <i className="bi bi-quote"><RiDoubleQuotesL /></i>
            </div>
            <h2 className="mb-2 fs-5 fw-bolder">Quote</h2>
            <div className="stars mb-3">
              {'★ ★ ★ ★ ★'}
            </div>
            <p className="text-warranty">
              Estoy super contento con el grupo. Vivo en un pueblo muy pequeño y la única forma de competir con las grandes cadenas es a través de la red. Jorge siempre se preocupa y me ayuda a conseguir nuevos proveedores.
            </p>
          </div>
          <div className="card-footer p-3">
            <p className="mb-0 text-white">Ricardo</p>
            <p className='mb-0 text-white'>Detalle</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}