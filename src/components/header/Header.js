import React from 'react'
import DesktopNav from './nav/DesktopNav'
import MobileNav from './nav/MobileNav'

function Header() {
  if (window.location.pathname !== "/") return null
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header