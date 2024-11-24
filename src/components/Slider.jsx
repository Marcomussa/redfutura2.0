import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* Pics */
import AirConditioner from "../public/images/slider/air-conditioner.h03.webp"
import Bed from "../public/images/slider/bed.h03.webp"
import Bicycle from "../public/images/slider/bicycle-red.h03.webp"
import Cordless from "../public/images/slider/cordless-electric-shaver.h03.webp"
import HairDryer from "../public/images/slider/hair-dryer.h03.webp"
import Table from "../public/images/slider/patio-square-card-table.h03.webp"
import Tv from "../public/images/slider/tv-max2020.h03.webp"

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={Tv} alt="Teconologia" /><p className='pb-4 fw-bold'>Teconologia</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={Cordless} alt="Electrodomesticos" /> <p className='pb-4 fw-bold'>Electrodomesticos</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={AirConditioner} alt="Climatizacion" /><p className='pb-4 fw-bold'>Climatizacion</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={HairDryer} alt="Salud,Belleza,Fitness" /><p className='pb-4 fw-bold'>Salud,Belleza,Fitness</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={Bed} alt="Muebles y Colchones" /><p className='pb-4 fw-bold'>Muebles y Colchones</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={Table} alt="Hogar" /><p className='pb-4 fw-bold'>Hogar</p></SwiperSlide>
        <SwiperSlide className='shadow p-3 mb-5 bg-body'><img src={Bicycle} alt="Rodado" /><p className='pb-4 fw-bold'>Rodado</p></SwiperSlide>
      </Swiper>
    </>
  )
}