import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper'
import brands from './brands'

SwiperCore.use([Autoplay])

export const BrandSlider = ({ reverseDirection }) => {
  return (
    <div className="tw-w-full">
      <Swiper
        loop={true}
        freeMode={true}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: reverseDirection,
        }}
        speed={5000}
        freeModeMomentum={false}
      >
        {brands
          .map((brand) => (
            <SwiperSlide key={brand.id}>
              <Image
                src={brand.src}
                alt={brand.name}
                width={100}
                height={100}
                objectFit="contain"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
