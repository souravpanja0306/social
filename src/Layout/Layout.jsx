import React from 'react'
import Header from '../Components/Header'

const Layout = ({ children }) => {
  return (
    <div className=''>
      <div className='h-[10vh]'>
        <Header />
      </div>
      <div className='h-[90vh] overflow-y-scroll p-1 bg-slate-200 z-50'>
        {children}
      </div>
    </div>
  )
}

export default Layout