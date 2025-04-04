import React from 'react'
import AdminSidebar from './AdminSidebar'
import AdminContent from './AdminContent'

const AdminContainer = () => {
  return (
    <section className='w-[100vw] flex'>
        <AdminSidebar/>
        <AdminContent/>
    </section>
  )
}

export default AdminContainer