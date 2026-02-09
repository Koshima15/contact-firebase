import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ onClose, isOpen, children }) => {
    return createPortal(
        <>

            {isOpen && (
                <div className='grid place-items-center absolute top-0 backdrop-blur h-screen w-screen' >
                    <div className='z-50 relative min-h-50 min-w-100 bg-white p-4 m-auto'>
                        <div className='flex justify-end'>
                            <AiOutlineClose className='self-end text-2xl cursor-pointer' onClick={onClose} />
                        </div>
                        {children}
                    </div>
                    {/* <div className='absolute top-0 backdrop-blur h-screen w-screen' onClick={onClose} /> */}
                </div>
            )}
        </>
  ,document.getElementById("modal-root"))  
}

export default Modal