import React from 'react'
import img from '../component/image/Tony.jpg.jpg'
import straktech from '../component/image/starktech.jpg'
import Missile from '../component/image/Missile.jpg'
 
export const Page1 = () => {
  return (
    <div className='w-80%  h-screen  bg-black  flex justify-even'>

        <div className='  mt-20 ml-10 '>
        <p className='text-2xl text-slate-100  '>I'M 
            <h1 className='text-4xl text-yellow-300 font-bold'>Tony Stark</h1>
            <p className='text-3xl text-red-700'> Iron Man   <br></br>
                
            </p>
            <p className='text-2xl text-white-100'>   & <br></br>
                Starks Techknowlogey CEO
            </p>
            <br></br>
            <button className='text-yellow-500 border-solid  rounded bg-black transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-indigo-500 duration-300   '>Contact Me</button>
        </p>
        </div>


              {/* Tony starck phhoto */}
            <div className='flex   '>
                <img src={img} alt="Tony stark" className='object-contain   grayscale  aspect-square    '/>
            </div>
                
            <div className=' '> 
              <img src={straktech} alt='stracktech' className=' absolute bottom-0 right-0'/>
            </div>
           <div>
               <img src={Missile} alt='Misslie' className='h-96 absolute bottom-28 right-20'/>
           </div>

           
    </div>
  )
}
