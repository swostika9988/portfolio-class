import React from 'react'
import contactimage from '../pages/car.webp'

const Contact = () => {
  return (
    <>
     
        <div className='flex gap-8'>
        <form action="" className='border-2 w-[50%] p-4 mt-4 ml-2 mb-4 bg-slate-100 '>
        <div className='container  '>

          <h1 className='text-2xl text-center font-bold mb-4 '>Contact Us</h1>
          <div className='grid grid-cols-2 gap-2'>
            <div>
              <label htmlFor="name" >Firstname</label>
              <input className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='firstname' placeholder='firstname' />
            </div>
            <div>
              <label htmlFor="name" >Lastname</label>
              <input className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='lastname' placeholder='lastname' />
            </div>
            <div>
              <label htmlFor="phone" >Phone</label>
              <input className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="number" name='phone' placeholder='phone' />
            </div>
            <div >
              <label htmlFor="address" >Address</label>
              <input className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='adresss' placeholder='address' />
            </div>
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-semibold mb-2'>Email</label>
            <input className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="email" name='email' placeholder='email@gmail.com'/>
          </div>
          <div >
            <label htmlFor="message" className='block text-sm font-semibold mb-2'>Message</label>
            <textarea className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' name="message" id="" cols="30" rows="5"></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 '>
              Submit
            </button>
          </div>
          </div>
        </form >
        
        <img src={contactimage} alt="" className='w-[40%]' />
        
        </div>
      



    </>
  )
}

export default Contact