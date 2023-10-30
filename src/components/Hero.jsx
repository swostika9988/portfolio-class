import React from 'react'
import image from "../assets/car.webp"

const Hero = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-6 m-10  '>
      <div className='flex flex-col gap-4 justify-center items-center  '>
       <h1 className='font-bold  text-red-950 text-2xl'>Hi, <span className='text-red-500'>Welcome</span>  to my Website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis similique quas, tempore assumenda nobis amet temporibus incidunt expedita officiis nemo voluptas hic beatae soluta! Illum odio officia veniam tempora rerum!</p>
        <button className='bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-sky-700'>Learn More</button>

      </div>
        <div className=" flex flex-col  ">
        <img  className='rounded-xl  object-fill' src={image} alt=""  />
      
        </div>
    </div>
    </>
  )
}

export default Hero