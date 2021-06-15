import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay])

export const HomeSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <section className="tw-relative">
            <div className="tw-w-full tw-min-h-80-vh tw-filter tw-brightness-25">
              <Image
                src="/assets/images/plant.png"
                alt="plant"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="tw-absolute tw-z-10 md:tw-w-2/4 tw-inset-y-0 left-0 tw-align-middle tw-flex tw-items-center tw-justify-center tw-px-5">
              <div
                className={`animate__animated ${
                  isActive ? 'animate__fadeInDown' : ''
                }`}
              >
                <h2 className="tw-text-white tw-font-bold tw-text-5xl tw-mb-5">
                  Automotive Plastic Injection
                </h2>
                <p className="tw-text-white tw-text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam eget malesuada lacus. Phasellus et odio vitae lorem
                  porta tincidunt mollis ut urna. Cras vitae vehicula tortor.
                </p>
              </div>
            </div>
          </section>
        )}
      </SwiperSlide>
    </Swiper>
  )
}
