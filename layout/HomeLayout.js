import React from 'react'
import { NavbarHome } from '../components/navbar/NavbarHome'

export const HomeLayout = ({ children }) => {
  return (
    <>
      <NavbarHome />
      {children}
    </>
  )
}
