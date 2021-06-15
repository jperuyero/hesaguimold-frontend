import React from 'react'
import { BrandSlider } from '../Slider/BrandSlider'

export const Clients = () => {
  return (
    <div className="tw-min-h-80-vh tw-pt-20" id="Clients">
      <h1 className="tw-text-4xl tw-font-bold tw-text-center tw-my-5 tw-uppercase">
        OUR CLIENTS
      </h1>
      <div className="tw-flex tw-flex-wrap tw-content-center tw-h-full">
        <BrandSlider />
      </div>
    </div>
  )
}
