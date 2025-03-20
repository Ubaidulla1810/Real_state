import React from 'react'
import backimg from '../assets/header_img.png'
import Navbar from './Navbar'

const Header = () => {
    return (

        <div className='min-h-screen  bg-cover bg-center flex items-center w-full overflow-hidden' style={{ backgroundImage: `url(${backimg})` }} id='header'>
            <Navbar></Navbar>
            <div
            className='home_container text-center mx-auto py-4 px-6 md:px-20 lg:px32 text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
               <div className='btns space-x-5 mt-15'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#contact"  className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
               </div>
            </div>
        </div>
    )
}

export default Header