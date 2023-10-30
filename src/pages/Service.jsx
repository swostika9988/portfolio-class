import React from 'react'
import Serviceimage from '../pages/car.webp'

const Service = () => {
  const ServiceData =[
    {
      image: Serviceimage,
      name : "Web Development",
      description : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos consequatur veritatis vitae enim aperiam libero natus non dicta, tempora quibusdam obcaecati culpa consequuntur nam ad quod officiis sapiente optio?"

    },
   

    {
      image: Serviceimage,
    name: "App Development",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos consequatur veritatis vitae enim aperiam libero natus non dicta, tempora quibusdam obcaecati culpa consequuntur nam ad quod officiis sapiente optio?"
    },
  {
    image: Serviceimage,
    name: "Digital marketing",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eos consequatur veritatis vitae enim aperiam libero natus non dicta, tempora quibusdam obcaecati culpa consequuntur nam ad quod officiis sapiente optio?"
  }
  ]
  return (
    <>
    <div className=' mt-10  mx-10 ' >
    <h1 className='font-bold text-center text-red-950 text-2xl'>Our Service</h1>
     <div className='flex flex-row justify-center gap-4 mx-8 '>
      {ServiceData.map((Service,Index) =>( 
      <div className='flex flex-col justify-center items-center rounded-lg shadow-lg p-4 w-[300px]' key={Index}>
       <img className='rounded-full  h-40 w-40 object-cover' src={Serviceimage} alt="" />
       <h1 className='font-semibold text-lg my-4'>{Service.name}</h1>
       <p className='text-justify' >{Service.description}</p>
       <button className='bg-red-500 mt-2 text-white font-semibold px-4 py-2 rounded hover:bg-green-700'>Read More</button>
        
      </div>
))}

     </div>


    </div>
    </>
  )
}

export default Service