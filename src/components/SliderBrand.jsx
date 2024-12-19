import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* Pics */
import Brand from "../public/images/brands/atma.jpg"

export default function Slider() {
    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = sliderRef.current
        let sliderWidth = slider.offsetWidth
        let totalWidth = slider.scrollWidth

        const moveSlider = () => {
            if (slider.scrollLeft >= totalWidth - sliderWidth) {
                slider.scrollLeft = 0
            } else {
                slider.scrollLeft += 1
            }
        }
        const interval = setInterval(moveSlider, 2);

        return () => {
            clearInterval(interval);
        };
    })
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination/* , Autoplay */]}
                className="mySwiper swiper-category py-lg-5"
                ref={sliderRef}
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