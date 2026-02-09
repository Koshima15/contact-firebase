import React from 'react'

import notFound from '../assets/Hands Contact.png'
const NotFound = () => {
  return (
    <div className='flex gap-3 items-center justify-center h-100'>
        <div>

        <img src={notFound} alt="" />
        </div>
        <h3 className='text-white text-2xl font-semibold'>Contacts Not Found!</h3>
    </div>
  )
}

export default NotFound