import React from 'react'
import "./Home.css";
import img1 from "../assessts/hero-img1.jpg"
import img2 from "../assessts/hero-img2.jpg";
import img3 from "../assessts/hero-img3.jpg";
import {useNavigate} from "react-router-dom";
function Hero() {
  const navigate=useNavigate();


  function clickHandeler(){
    navigate("/shop");
  }
  return (
    <div className='hero_section flex flex-col lg:flex-row gap-x-4 mt-4 w-screen'>
          <div className='cont-1 lg:w-[45.7%] w-[100%] 2xl:ml-7 rounded-md  overflow-hidden h-[740px] relative  group cursor-pointer' onClick={clickHandeler}>
             <img src={img1} className='h-[100%] w-[100%] object-fill group-hover:scale-125 duration-500 z-0 group-hover:blur-md'/>
             <p className=' absolute top-5  text-[2.5rem] group-hover:translate-x-[2rem] font-semibold duration-500 opacity-0 group-hover:opacity-100 text-white' >SHOP NOW</p>
          </div>
           
           <div className='cont-2 lg:w-[45.6%] w-[100%]  h-[100%] relative' >
               <div className='cont-top h-[360px]  w-[100%] rounded-md overflow-hidden group cursor-pointer' onClick={clickHandeler}>
                     <img src={img2} className='h-[100%] w-[100%]  group-hover:scale-125 duration-500 object-fill group-hover:blur-md'/>
                     <p className='absolute top-5 text-[2.5rem] group-hover:translate-x-[2rem] font-semibold duration-500 opacity-0 group-hover:opacity-100 text-white'> SHOP NOW</p>
               </div>
               <div className='cont-bottom lg:mt-5 h-[360px]  w-[100%] rounded-md overflow-hidden relative group cursor-pointer' onClick={clickHandeler}>
                     <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71ZDrWVeFcL.jpg" className='h-[100%] w-[100%] group-hover:scale-125 duration-500 object-fill group-hover:blur-md'/>
                   <p className='absolute top-5 text-[2.5rem] group-hover:translate-x-[2rem] text-white font-semibold duration-500 opacity-0 group-hover:opacity-100'>SHOP NOW</p>
               </div>
           </div>

          
    </div>
  )
}

export default Hero