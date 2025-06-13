import React from 'react'
import Header from '../Components/Header'

const Layout = ({
  children = {}
}) => {
  return (
    <div className=''>
      <div className='min-h-[10vh]'>
        <Header />
      </div>
      <div className='min-h-[90vh] overflow-hidden p-1'>
        {children}
      </div>
    </div>
  )
}

export default Layout