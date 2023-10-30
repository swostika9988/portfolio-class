import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='container mx-auto p-4'>

<h1 className='text-2xl font-bold mb-4'>Contact Us</h1>   
   <form action="">
    <div className='w-[30%] border p-2 rounded'>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' required />
    </div>
     <div className='w-[30%] border p-2  mb-4 rounded'>
     <label htmlFor="email">Email</label>
      <input type="email" id='email' name='email' required /> 
     </div>
     <div className='w-[30%] h-[90px] border p-2 mb-4 rounded'
            rows='4' >
     <label htmlFor="message" className='block text-sm font-semibold mb-2'>Message</label>
      <input type="text" id='messagr' name='message' required /> 
     </div>
     <div className=' mb-4'>
          <button type='submit' className='bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-700'>
            Submit
          </button>
        </div>
   </form>


    </div>
    </>
  )
}

export default Contact