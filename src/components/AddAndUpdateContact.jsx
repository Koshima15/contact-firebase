import React from 'react'
import Modal from './Modal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import * as Yup from "yup"



const contactValidation = Yup.object().shape({
    name: Yup.string().required("**Name is required!!"),
    email: Yup.string()
    .required("**E-mail is required!!")
    .email("**Invalid E-Mail!"),
    phone: Yup.string()
    .length(10,"**Phone number must be exaclt 10 Digits!")
    .required("**Phone number is required!")
    .matches(/^[0-9]+$/, '**Phone number must contain only digits')
})
const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContact = async (contact) => {
        console.log(contact)
        try {
            const contactRef = collection(db, "contacts")
            await addDoc(contactRef, contact)
            onClose()
            toast.success("Contact Added Successfully!")
        } catch (error) {
            console.log(error)
        }
    };
    const updateContact = async (id, contact) => {
        console.log(contact)
        try {
            const contactRef = doc(db, "contacts", id)
            await updateDoc(contactRef, contact)
            onClose();
            toast.success("Contact Updated Successfully!")
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                    validationSchema={contactValidation}
                    enableReinitialize
                    initialValues={isUpdate ? {
                        name: contact.name,
                        email: contact.email,
                        phone: contact.phone
                    } : {
                        name: "",
                        email: "",
                        phone: ""
                    }}
                    onSubmit={(values) => {
                        isUpdate ? updateContact(contact.id, values) :
                            addContact(values)

                    }}
                >
                    <Form className='flex flex-col gap-3'>
                        <div className="flex flex-col gap-1">
                            <label htmlFor='name'>
                                Name:
                            </label>
                            <Field name="name" className=" h-6 border " />
                           <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor='email'>
                                Email:
                            </label>
                            <Field type="email" name="email" className=" h-6 border " />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor='phone'>
                                Contact No.:
                            </label>
                            <Field type="string"  name="phone" className=" h-6 border " />
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />

                        </div>
                        <button type="submit" className='bg-orange-500 px-3 py-1.5 border self-end'>{isUpdate ? "Update Contact" : "Add Contact"}</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddAndUpdateContact