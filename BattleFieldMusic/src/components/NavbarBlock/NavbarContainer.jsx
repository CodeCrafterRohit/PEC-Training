import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
    <header className='w-[100vw] h-[70px] bg-gray-700 text-white flex justify-between items-center'>
        <Logo/>
        <Menu/>
    </header>
  )
}

export default NavbarContainer