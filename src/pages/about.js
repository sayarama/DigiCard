import React from 'react'
import { FaInstagram, FaArrowCircleLeft } from "react-icons/fa";
import Link from 'next/link';

function about() {
  return (
    <div className=' w-screen h-screen  bg-yellow-300 font-poppins p-4'>

       <Link href="/">
       <div className='flex items-center mb-5'>
            <FaArrowCircleLeft/>
            <p className='px-3'>Home</p>
        </div>
       </Link>

        <div className='bg-white rounded-md w-2/3 m-auto h-3/4 md:flex md:items-center md:flex-row shadow-xl overflow-scroll '>
           <div className='left bg-profile rounded-md bg-cover bg-no-repeat bg-center w-full md:w-2/4 h-2/4 md:h-full '>

           </div>

           <div className='md:w-2/4 right p-3 flex flex-col md:h-full md:justify-center'>
            <h1 className='font-bold md:text-3xl lg:text-7xl'>
                About Me
            </h1>

            <p className='mt-3'>Aulia Ramadhan (Rama) is a Front-End Web Developer who lives in Jakarta. Love to slice design to a simple website interface. This website is made to learn how to fetch API using api from https://digimon-api.com/ .</p>

           
            
            <Link href="https://www.instagram.com/ul.ramadhan/" target="_blank">
            <div className='flex items-center mt-3 font-semibold'>
                <FaInstagram/>
                <p>ul.ramadhan</p>
            </div>
            </Link>
           </div>


        </div>
    </div>
  )
}

export default about