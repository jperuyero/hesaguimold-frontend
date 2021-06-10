import React, { useState } from 'react'
import Link from 'next/link'
import menuHome from './menuHome'

export const NavbarHome = () => {
  const [isActive, setIsActive] = useState(true)

  const menuActive = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className="tw-w-full tw-bg-white tw-sticky tw-top-0 tw-px-5 tw-py-2 tw-border-b tw-z-50">
      <div className="xl:tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center">
        <div className="tw-w-full md:tw-w-auto tw-flex tw-justify-between tw-my-2">
          <button className="tw-block md:tw-hidden" onClick={menuActive}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7H19"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H19"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 13H19"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <Link href="/#">
            <a>
              <img className="tw-h-8" src="/assets/Logo.svg" alt="logo" />
            </a>
          </Link>
        </div>

        <div
          className={`tw-w-full md:tw-flex-row tw-flex-col md:tw-justify-end tw-transition-all tw-divide-y md:tw-divide-y-0 ${
            isActive ? 'md:tw-flex tw-hidden' : 'tw-flex'
          }`}
        >
          {menuHome.map((menu) => (
            <div className="tw-p-2" key={menu.id}>
              <Link href={menu.href}>
                <a>{menu.nombre}</a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}
