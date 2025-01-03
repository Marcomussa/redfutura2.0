import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* Pics */
import Brand from "../public/images/brands/atma.jpg"

export default function Slider() {
    return (
        <>
            <Swiper
                    slidesPerView={4}
                    spaceBetween={25}
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
                className="mySwiper swiper-category py-lg-5"
            >
                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand'>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

                <SwiperSlide className='mb-5 card-swipper-brand '>
                    <img src={Brand} alt="" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}