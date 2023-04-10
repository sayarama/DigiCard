import React from 'react'
import Navbar from './Navbar/Navbar'

function about() {
  return (
    <div className=' w-screen h-screen  bg-yellow-300 font-poppins'>
        <Navbar/>
        <div className='mt-10 bg-white w-3/4 h-3/4 m-auto flex'>
           <div className='left bg-red-400 w-2/4 h-full'>

           </div>

           <div className='right bg-blue-400 w-2/4 h-full'>

           </div>
        </div>
    </div>
  )
}

export default about