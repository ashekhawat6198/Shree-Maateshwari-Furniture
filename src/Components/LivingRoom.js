import React from 'react'
import img1 from "../assessts/living-furniture1.jpg";
import img2 from "../assessts/livingfurniture2.png";
import img3 from "../assessts/livingfurniture3.png";
import img4 from "../assessts/livingfurniture4.png";
import img5 from "../assessts/livingfurniture5.png";

function LivingRoom() {
  return (
    <div className='mt-[4rem]'>
         <h1 className='mt-[2rem] text-[34px] ml-11 text-gray-700 font-medium'>Living Room Furniture</h1>
         <p className='mt-[-3px] ml-11 text-[20px] text-gray-500'>Let's Brew N Binge</p>
         <div className='flex w-[94%] mx-auto mt-5'>
         
            <div className='w-[50%] cursor-pointer'>
                 <img src={img1} className='w-[99%]'/>
            </div>

            <div className='ml-3 w-[25%]'>
                   <div className='w-[99%] '>
                          <img src={img2} className='w-[95%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>3 Seater Sofas</p>
                   </div>

                   <div className='w-[99%] mt-2 ' >
                          <img src={img3} className='w-[95%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>TV Units</p>
                   </div>
            </div>

            <div className='w-[25%] '>
            <div className='w-[99%]'>
                          <img src={img4} className='w-[95%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Side End Tables</p>
                   </div>

                   <div className='w-[99%] mt-2'>
                          <img src={img5} className='w-[95%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Coffee Table</p>
                   </div>
            </div>

         </div>
         <div className='w-[93%]  ml-[45px] h-[2px] opacity-50 bg-gray-300 mt-8'></div>
    </div>
  )
}

export default LivingRoom;