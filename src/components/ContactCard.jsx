import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import {db} from '../config/firebase'
import {  doc, deleteDoc } from 'firebase/firestore';
import AddAndUpdateContact from './AddAndUpdateContact';
import useDisclose from '../hooks/useDisclose';
import { toast } from 'react-toastify';
const ContactCard = ({contact}) => {


const {isOpen,onClose,onOpen}=useDisclose()
  const deleteContact= async(id)=>{
      try {
    await deleteDoc(doc(db, 'contacts', id))
    toast.success("Contact Deleted Successfully!")
  } catch (error) {
    console.log(error)
  }

  }
  return (
    <>
        <div key={contact.id} className='bg-amber-100 flex justify-around p-2 rounded-lg mt-2'>
              <div className='flex  items-center gap-2'>
              <HiOutlineUserCircle className='text-4xl text-orange-500'/>
              <div className='text-black'>
                <h2 className='font-medium'>{contact.name}</h2>
                <p className='text-sm'>{contact.email}</p>
                <p className=''>{contact.phone}</p>
              </div>
              </div>
              <div className='flex text-3xl items-center gap-2'>
                  <RiEditCircleLine className='cursor-pointer' onClick={onOpen}/>
                 <IoMdTrash className='text-orange-500 cursor-pointer' onClick={()=>deleteContact(contact.id)}/> 
              </div>
            </div>
            <AddAndUpdateContact isOpen={isOpen} onClose={onClose} isUpdate contact={contact}/>
            </>
    
  )
}

export default ContactCard