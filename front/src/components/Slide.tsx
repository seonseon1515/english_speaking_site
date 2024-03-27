import React from 'react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../css/Slide.scss'


export default function Slide() {
  SwiperCore.use([Navigation, Pagination, Autoplay])
  return (
    <div>
    <Swiper spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{delay:3000}}>
      <SwiperSlide>
        <img className='slide_img1' src={`${process.env.PUBLIC_URL}/img/slide_img1.jpg`} alt="img1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="slide_img2" src={`${process.env.PUBLIC_URL}/img/slide_img2.webp`} alt="img2" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_img3"> 이미지 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_img4">이미지 4</div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}
