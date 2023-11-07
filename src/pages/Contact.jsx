import React from 'react'
import contactimage from '../pages/car.webp'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(firstname, lastname, phone, address, email, message);
  const handleClick = (e) => {
    e.preventDefault();
    if (firstname && lastname && phone && address && email && message) {
      const formdata = new FormData();
      formdata.append("firstname", firstname);
      formdata.append("lastname", lastname);
      formdata.append("phone", phone);
      formdata.append("address", address);
      formdata.append("email", email);
      formdata.append("message", message);
      axios.post("https://achyut.acetechnepal.com/contact/" , formdata)
      .then (res=>toast("Form Submit Sucessfully"));
      setFirstname("");
      setLastname("");
      setPhone("");
      setAddress("");
      setEmail("");
      setMessage("");
    }
    else if (!firstname) {
      toast("No firstname")
    }
    else if (!lastname) {
      toast("No lastname")
    }
    else if (!phone) {
      toast("No phone")
    }
    else if (!address) {
      toast("No address")
    }
    else if (!email) {
      toast("No email")
    }
    else if (!message) {
      toast("No message")
    }
    else {
      toast("Please Fill the Form Completely");

    }

  }

  return (
    <>

      <div className='flex gap-8'>
        <ToastContainer />
        <form action="" className='border-2 w-[50%] p-4 mt-4 ml-2 mb-4 bg-slate-100 '>
          <div className='container  '>

            <h1 className='text-2xl text-center font-bold mb-4 '>Contact Us</h1>
            <div className='grid grid-cols-2 gap-2'>
              <div>
                <label htmlFor="name" >Firstname</label>
                <input onChange={e => setFirstname(e.target.value)} value={firstname} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='firstname' placeholder='firstname' required />
              </div>
              <div>
                <label htmlFor="name" >Lastname</label>
                <input onChange={e => setLastname(e.target.value)} value={lastname} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='lastname' placeholder='lastname' required />
              </div>
              <div>
                <label htmlFor="phone" >Phone</label>
                <input onChange={e => setPhone(e.target.value)} value={phone} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="number" name='phone' placeholder='phone' required />
              </div>
              <div >
                <label htmlFor="address" >Address</label>
                <input onChange={e => setAddress(e.target.value)} value={address} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='adresss' placeholder='address' required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email</label>
              <input onChange={e => setEmail(e.target.value)} value={email} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="email" name='email' placeholder='email@gmail.com' required />
            </div>
            <div >
              <label htmlFor="message" className='block text-sm font-semibold mb-2'>Message</label>
              <textarea onChange={e => setMessage(e.target.value)} value={message} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' name="message" id="" cols="30" rows="5" required></textarea>
            </div>
            <div className='text-center'>
              <button type='submit' onClick={handleClick} className='bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 ' >
                Submit
              </button>
            </div>
          </div>
        </form >

        <img src={contactimage} alt="" className='w-[40%] h-[210px]' />

      </div>




    </>
  )
}

export default Contact