'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
export function HeroResonance() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <Image
            src="/banner1.jpg"
            alt="Banner1"
            width={1600}
            height={600}
            className="slider-image w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/banner2.jpg"
            alt="Banner2"
            width={1600}
            height={600}
            className="slider-image w-full h-[500px] object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/banner3.jpg"
            alt="Banner3"
            width={1600}
            height={600}
            className="slider-image w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>

      <style jsx global>{` .swiper-slide-active .slider-image 
   { animation: zoomEffect 7s ease-in-out forwards; } 
    @keyframes zoomEffect { from { transform: scale(1); } 
    to
     { transform: scale(1.08); } } `}</style>

    </>
  )

}