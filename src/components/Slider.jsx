import React, {useEffect, useRef} from 'react'
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

export default function Slider() {/* 
  const sliderRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    let sliderWidth = slider.offsetWidth
    let totalWidth = slider.scrollWidth

    const moveSlider = () => {
      if (slider.scrollLeft >= totalWidth - sliderWidth){
        slider.scrollLeft = 0
      } else{
        slider.scrollLeft += 1
      }
    }
    const interval = setInterval(moveSlider, 6);

    return () => {
      clearInterval(interval);
    };
  }) */
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }} 
        speed={1500}
        modules={[Pagination, Autoplay]}
        className="mySwiper swiper-category"
      >
        <SwiperSlide className=' card-swipper swiper-slide-category'>
          <img src={Tv} alt="Teconologia"/>
          <p className='pb-4 '>Teconologia</p>
        </SwiperSlide>

        <SwiperSlide className=' card-swipper swiper-slide-category'>
          <img src={Cordless} alt="Electrodomesticos"/>
          <p className='pb-4 '>Electrodomesticos</p>
        </SwiperSlide>

        <SwiperSlide className=' card-swipper swiper-slide-category'>
          <img src={AirConditioner} alt="Climatizacion"/>
          <p className='pb-4 '>Climatizacion</p>
        </SwiperSlide>

        <SwiperSlide className='card-swipper swiper-slide-category'>
          <img src={HairDryer} alt="Salud,Belleza,Fitness"/>
          <p className='pb-4'>Salud,Belleza,Fitness</p>
        </SwiperSlide>

        <SwiperSlide className='card-swipper swiper-slide-category'>
          <img src={Bed} alt="Muebles y Colchones"/>
          <p className='pb-4 '>Muebles y Colchones</p>
        </SwiperSlide>

        <SwiperSlide className=' card-swipper swiper-slide-category'>
          <img src={Table} alt="Hogar"/>
          <p className='pb-4'>Hogar</p>
        </SwiperSlide>
        
        <SwiperSlide className='card-swipper swiper-slide-category'>
          <img src={Bicycle} alt="Rodado"/>
          <p className='pb-4 '>Rodado</p>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}