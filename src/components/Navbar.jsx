import React from 'react'
import logo from '../assets/logos_firebase.png'
const Navbar = () => {
    return (
        <>
            <div className='h-15
     bg-white my-4 rounded-lg flex justify-center items-center gap-2 text-xl font-medium'>
                <img src={logo} alt="" />
                <h1>Firebase Contact App</h1>

            </div>
            
        </>
    )
}

export default Navbar