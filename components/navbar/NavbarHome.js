import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import menuHome from './menuHome'

export const NavbarHome = () => {
  const [isActive, setIsActive] = useState(true)
  const [navbar, setNavbar] = useState(false)

  const menuActive = () => {
    setIsActive(!isActive)
  }

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])


  return (
    <nav
      className={`tw-w-full tw-fixed tw-top-0 tw-px-5 tw-py-2 tw-z-50 tw-transition-all tw-font-bold ${
        navbar || !isActive ? 'tw-bg-white tw-text-gray-900' : 'tw-text-white'
      }`}
    >
      <div className="xl:tw-container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-items-center">
        <div className="tw-w-full md:tw-w-auto tw-flex tw-justify-between tw-my-2">
          <button className="tw-block md:tw-hidden" onClick={menuActive}>
            <svg
              className={`tw-fill-current tw-text-white tw-transition-all ${
                navbar || !isActive ? 'tw-text-gray-900' : 'tw-text-white'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path d="M2 13.5h14V12H2v1.5zm0-4h14V8H2v1.5zM2 4v1.5h14V4H2z" />
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
