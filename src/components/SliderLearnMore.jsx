import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CabinetTv from "../public/images/slider/cabinet-tv-and-yellow-wall-in-li.webp";
import HouseKeeping from "../public/images/slider/housekeeping-concept-washing-mac.webp";
import Interior from "../public/images/slider/interior-of-modern-room-with-com.webp";
import ModernKitchen from "../public/images/slider/modern-kitchen-appliances-2023-1.webp";
import Woman from "../public/images/slider/woman-putting-capsule-to-coffee-.webp"



export default function SliderLearnMore() {
    return (
        <>
            <Swiper
                direction={'vertical'}
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
                className="mySwiper swiper-learn mt-5"

                style={{ height: '60vh', width: '80%' }}
            >
                <SwiperSlide><img src={CabinetTv} alt="" className='swiper-slide-learn'/></SwiperSlide>
                <SwiperSlide><img src={HouseKeeping} alt="" className='swiper-slide-learn'/></SwiperSlide>
                <SwiperSlide><img src={Interior} alt="" className='swiper-slide-learn'/></SwiperSlide>
                <SwiperSlide><img src={ModernKitchen} alt="" className='swiper-slide-learn'/></SwiperSlide>
                <SwiperSlide><img src={Woman} alt="" className='swiper-slide-learn'/></SwiperSlide>
            </Swiper>
        </>
    )
}