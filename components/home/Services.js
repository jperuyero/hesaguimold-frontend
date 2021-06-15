import React from 'react'
import Image from 'next/image'

export const Services = () => {
  return (
    <div className="tw-min-h-80-vh tw-pt-20" id='Services'>
      <h1 className="tw-text-4xl tw-font-bold tw-text-center tw-mb-20 tw-uppercase">
        Our Services
      </h1>
      <div className="tw-grid md:tw-grid-cols-3 tw-gap-4">
        <div className="tw-w-full">
          <div className="tw-overflow-hidden tw-rounded-xl tw-h-52 tw-w-full tw-relative">
            <Image
              src="/assets/images/ser-img1.jpg"
              alt="Plastic Injection"
              // width={500}
              // height={500}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="tw-text-2xl tw-text-center tw-my-5 ">
              Plastic Injection
            </h2>
            <p className="tw-text-base tw-my-5">
              We offer world class plastic injection molding services with
              machine tonnages ranging from 110T - 1850T.
            </p>
          </div>
        </div>
        <div className="tw-w-full">
          <div className="tw-overflow-hidden tw-rounded-xl tw-h-52 tw-w-full tw-relative">
            <Image
              src="/assets/images/ser-img2.jpg"
              alt="Plastic Injection"
              // width={500}
              // height={500}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="tw-text-2xl tw-text-center tw-my-5 ">
              Mold Engineering
            </h2>
            <p className="tw-text-base tw-my-5">
              Our Mold Engineering department is capable of carrying out tooling
              maintenance and also minor modifications to components.
            </p>
          </div>
        </div>
        <div className="tw-w-full">
          <div className="tw-overflow-hidden tw-rounded-xl tw-h-52 tw-w-full tw-relative">
            <Image
              src="/assets/images/ser-img3.jpg"
              alt="Plastic Injection"
              // width={500}
              // height={500}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="tw-text-2xl tw-text-center tw-my-5 ">
              Component Assembly
            </h2>
            <p className="tw-text-base tw-my-5">
              Added value engineering immediately after the injection process
              such as automated sprue cutting and screw assembly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
