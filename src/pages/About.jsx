import React from 'react';
import image from '../pages/panel.webp';
import Contact from './Contact';

const About = () => {
  return (
    <>
    <div className='flex justify-center items-center gap-6 m-10'>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h1 className='font-bold text-2xl text-red-900'>About Us Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima qui magnam recusandae, nulla veritatis odit
          molestiae voluptatem libero aliquam fugit aspernatur nesciunt modi, pariatur necessitatibus officia deleniti
          quod. Explicabo.
        </p>

        <div className='flex items-center gap-4'>
          <div className='bg-red-900 text-white font-bold py-4 px-8 hover:bg-sky-700 h-[100px] w-[100px] flex justify-center items-center text-center rounded-md shadow-2xl'>
            10+ Projects
          </div>
          <div className='bg-red-500 text-white font-bold py-4 px-8 hover:bg-yellow-700 h-[100px] w-[100px] flex justify-center items-center text-center rounded-md shadow-2xl'>
            200+ Projects
          </div>
          <div className='bg-blue-500 text-white font-bold py-4 px-8 hover:bg-red-700 h-[100px] w-[100px] flex justify-center items-center text-center rounded-md shadow-2xl'>
            1000+ Projects
          </div>
        </div>
      </div>

      <div  className='rounded-lg shadow-xl '>
        <img src={image} alt='' />
      </div>
    </div>
    
    </>

  );
};

export default About;
