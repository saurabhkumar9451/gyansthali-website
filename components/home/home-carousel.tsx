'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

export default function HomeCarousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{
        delay: 3000,
      }}
      loop={true}
    >
      <SwiperSlide>
        <img
          src="/banner1.jpg"
          className="w-full h-[500px] object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/banner2.jpg"
          className="w-full h-[500px] object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="/banner3.jpg"
          className="w-full h-[500px] object-cover"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  )
}