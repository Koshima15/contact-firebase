import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclose from './hooks/useDisclose';
import 'react-toastify/dist/ReactToastify.css'


import { ToastContainer, toast } from 'react-toastify';
import NotFound from './components/NotFound';
const App = () => {
  const [contacts, setContacts] = useState([])
  const { isOpen, onClose, onOpen } = useDisclose()
  
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts")
        // const contactsSnapshot=await getDocs(contactsRef)
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactList)
          return contactList
        })
        // console.log(contactsSnapshot)


      } catch (error) {
        console.log(error)
      }
    }
    getContacts()
  }, [])

  const filterContacts=(e)=>{
    const value=e.target.value

     try {
        const contactsRef = collection(db, "contacts")
        // const contactsSnapshot=await getDocs(contactsRef)
        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          const filteredContacts=contactList.filter(contact=> contact.name.toLowerCase().includes(value.toLowerCase()))
          setContacts(filteredContacts)
          return contactList
        })
        // console.log(contactsSnapshot)


      } catch (error) {
        console.log(error)
      }
  }
  return (
    <>
      <div className='max-w-117.5 mx-auto px-4'>
        <Navbar />
        <div className="flex gap-2">
          <div className='flex relative items-center grow'>
            <FiSearch className='text-white text-3xl absolute ml-1' />
            <input type="text" className="h-10 grow rounded-md border border-white bg-transparent text-white pl-9"  onChange={filterContacts}/>
          </div>
          <AiFillPlusCircle className='text-white text-4xl cursor-pointer' onClick={onOpen} />
        </div>
        <div className='mt-4'>
          {contacts.length<=0 ?<NotFound/>:contacts.map((contact) => {
            return <ContactCard contact={contact} key={contact.id} />
          })}
        </div>
      </div>
      
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position='bottom-center' style={{ zIndex: 99999 }}/>
    </>

  )
}

export default App