import React from 'react'
import img from '../component/image/Arc.jpg'
export const Navbar = () => {
  return (
    <div className='w-80% bg-slate-800 h-20 flex justify-around p-4 border-none sticky top-0 w-full z-50'  >
    
     <div className=' w-14   '>
      <img src={img} alt="Arc logo" className='rounded-full'/>
     </div> 

     <div className='flex  justify-center  gap-7'>  
     <div className='text-white'>About</div>
     <div className='text-gray-400'>Portfolio</div>
     <div className='text-gray-400'>Contact</div>
     </div>
     <div className='text-gray-300  '>
        <input className='bg-slate-500 rounded w-24 text-gray-300' placeholder='search ' ></input>
     </div>
     
    </div>
  )
}
