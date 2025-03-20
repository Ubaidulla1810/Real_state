import React, { useEffect, useState } from 'react'
import logo from '../assets/logo_dark.svg'            // If Navbar.jsx is in the `src` folder
import menuicon from '../assets/menu_icon.svg'
import crossicon from '../assets/cross_icon.svg'


const Navbar = () => {
  console.log(logo)
  const [MobileMenu, SetMObileMenu] = useState(false);
  useEffect(() => {
    // this will prevent the view in mobile phone to overflow
    if (MobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      // this is for if we open in large screen it will work as auto
      document.body.style.overflow = 'auto';
    }
  },[MobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>

      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={logo} alt="Logo"/>

        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
          <a href="#Testimonial" className='cursor-pointer hover:text-gray-400'>Testimonail</a>
        </ul>

        <button className='hidden md:block px-7 py-2 text-black bg-white rounded-full text-center hover:bg-blue-500 hover:text-white transition'>sign up</button>
        <img onClick={() => SetMObileMenu(true)} src={menuicon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>

      {/* for mobile devices css */}
      <div className={`md:hidden ${MobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 overflow-hidden bottom-0 bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={() => SetMObileMenu(false)} src={crossicon} className='w-6' alt="" />
        </div>

        <ul className='flex flex-col items-center gap-2 mt-10 mx-5 text-lg font-medium'>
          <a onClick={() => SetMObileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a onClick={() => SetMObileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a onClick={() => SetMObileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
          <a onClick={() => SetMObileMenu(false)} href="#Testimonial" className='px-4 py-2 rounded-full inline-block'>Testimonial</a>
        </ul>

      </div>

    </div>
  )
}

export default Navbar

