import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminContent = () => {
  return (
    <aside className='basis-[85%]'>
        <Outlet/>
    </aside>
  )
}

export default AdminContent