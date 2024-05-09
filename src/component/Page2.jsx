import React from 'react'
import iron from '../component/image/Iron man.jpg'
export const Page2 = () => {
  return (
    <div className='w-80% h-screen bg-black'>
         <br></br>
         <br></br>
        <p className='text-slate-400  font-sans font-bold text-3xl relative left-20'>About..</p>
        <p className='bg-yellow-400 h-0.5 w-20 relative left-28 text-white' ></p>
         <p className='text-white font-sans relative left-52 text-xl font-extralight'>.Tony Studies--  Tony Starck,in the Marvel universe, is depicted as a genious inventor and engineer.<br></br>
           He studied at the Massachusetts Institute of Technology (MIT) at a very young age and graduated <br></br>
           with multipe deggres in engineering and physics . His exceptional intellect and innovate mind are <br></br>
           key attributes that contribute to his success as both Tony Strack and iron Man<br></br>
            <br></br>
            .Stark Industries:- Stark Industries is a fictional company founded by Howard Stark, Tony's father.<br></br> 
            Tony Stark later takes over the company and transforms it into a leading technology conglomerate.<br></br> 
            Stark Industries is known for its advancements in weapons manufacturing, aerospace engineering, <br></br>
            and cutting-edge technology development. Tony's leadership and vision drive the company's success and <br></br>influence in the Marvel universe.
            <br></br>
            <br></br>
            .Iron Man: Tony Stark becomes Iron Man after being captured and injured by terrorists. Using his engineering skills, <br></br>
            he creates a powered suit of armor equipped with advanced technology and weapons. As Iron Man, Tony fights against threats to humanity,<br></br> 
            both on Earth and beyond. The Iron Man suit not only enhances his abilities but also serves as a symbol of protection and heroism.
           </p>
           <img src={iron} alt='Iron Man' className='w-40 relative bottom-72 left-3/4' />
           
    </div>
  )
}
