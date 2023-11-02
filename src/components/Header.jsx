import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaHome, FaTimes } from 'react-icons/fa'

const Header = () => {
  const Location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(prev=>!prev)
  };
  const isActive = (path) => {
    return Location.pathname === path
      ? "text-red-500 font-semibold border-b border-red-500 w-fit" : ""
  }

  return (
    <>
      <nav className='w-full sm:flex hidden bg-red-300 text-black p-5  '>

        <h1 className='ml-4 w-[40%] font-bold text-md text-blue-800 flex items-center gap-2' ><span><FaHome size={24} /></span> LOGO</h1>
        <div className=' gap-4 w-[60%] flex '>
          <Link to="/" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/")}`} >Home</Link>
          <Link to="/about" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/about")}`} >About</Link>
          <Link to="/service" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/service")}`}>Service</Link>
          <Link to="/contact" className={`font-semibold text-md text-red-500 hover:text-red-950m hover:border-b-2 border-red-500 ${isActive("/contact")}`}>Contact</Link>
        </div>

      </nav>
      <div className='sm:hidden flex justify-between items-center px-8 py-4 bg-rose-300 w-full border-b'>
        <div className='flex justify-between w-full'>
          <h1>LOGO</h1>
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ?
              <FaTimes /> : <FaBars />
            }


          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className='flex flex-col gap-2 bg-sky-100 px-8 py-2 font-semibold text-black-600 absolute top-0 h-screen w-[150px]'>
          <h1><FaHome size={60} /></h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}

    </>
  )
}

export default Header