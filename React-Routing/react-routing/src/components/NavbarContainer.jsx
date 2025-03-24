import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const NavbarContainer = () => {
  return (
    <div className='w-[100vw] h-[70px] bg-gray-900 text-white flex justify-between'>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default NavbarContainer