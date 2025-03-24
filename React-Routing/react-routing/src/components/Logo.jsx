import React from 'react'
import PandaLogo from "../assets/pandalogo.png"

const Logo = () => {
  return (
    <div className='basis-[15%] flex  justify-center items-center'>
        <img src={PandaLogo} alt="" 
        className='w-[110px] h-[60px] bg-white' />
    </div>
  )
}

export default Logo