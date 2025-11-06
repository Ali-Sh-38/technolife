import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation , Autoplay , Pagination , FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Slider=({children , className={} , slidesPerView={} , spaceBetween={} , pagination={} , navigation={} , loop={} , autoplay={} , speed={} , freeMode=false , breakpoints={} })=>{
  return (
    <>
      <Swiper modules={[Autoplay, Navigation , Pagination , FreeMode]} className={className} slidesPerView={slidesPerView} spaceBetween={spaceBetween} pagination={pagination} navigation={navigation} loop={loop} autoplay={autoplay} freeMode={freeMode} speed={speed} breakpoints={breakpoints}>
        {children}
      </Swiper>
    </>
  );
}

export default Slider

/*
slidesPerView={3}          // تعداد اسلایدهای همزمان
spaceBetween={20}          // فاصله بین اسلایدها
loop={true}                // حلقه کردن اسلایدر
autoplay={{ delay: 2500 }} // حرکت خودکار
speed={600}                // سرعت حرکت اسلاید
navigation                 // دکمه‌های next/prev
pagination={{ clickable: true }} // دایره‌های پایین قابل کلیک
modules={[Navigation, Pagination, Autoplay]}
*/