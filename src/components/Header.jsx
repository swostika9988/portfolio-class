import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const Location = useLocation ();
  const isActive = (path) =>{
    return Location.pathname === path
  ? "text-red-500 font-semibold border-b border-red-500 w-fit":""
}
  
  return(
    <>
    <nav className='w-full flex bg-red-300 text-black p-5  '>
    <h1 className='ml-4 w-[40%] font-bold text-md text-blue-800 ' >LOGO</h1>
    <div className=' gap-4 w-[60%] flex '>
      <Link to="/" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/")}`} >Home</Link>
      <Link to="/about" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/about")}`} >About</Link>
      <Link to="/service" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/service")}`}>Service</Link>
      <Link to="/contact" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/contact")}`}>Contact</Link>
    </div>
  </nav>
  </>
  )
}

export default Header