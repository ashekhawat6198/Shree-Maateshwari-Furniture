import React from 'react'
import img1 from "../assessts/DinningRoom/dinningfur1.jpg";
import img2 from "../assessts/DinningRoom/dinningfur2.webp";
import img3 from "../assessts/DinningRoom/dinningfur3.webp";
import img4 from "../assessts/DinningRoom/dinningfur4.webp";
import img5 from "../assessts/DinningRoom/dinningfur5.webp";

function DinningRoom() {
  return (
    <div className='mt-[3.5rem]'>
         <h1 className='mt-[2rem] text-[34px] ml-11 text-gray-700 font-medium'>Dinning Room Furniture</h1>
         <p className='mt-[-3px] ml-11 text-[20px] text-gray-500'>To Experience The Luxury Dining</p>
         <div className='flex w-[94%] mx-auto mt-5'>
         
            <div className='w-[50%] cursor-pointer'>
                 <img src={img1} className='w-[99%]'/>
            </div>

            <div className='ml-3 w-[25%]'>
                   <div className='w-[99%] '>
                          <img src={img2} className='w-[96.5%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Dining Chairs</p>
                   </div>

                   <div className='w-[99%] mt-2 ' >
                          <img src={img3} className='w-[96.5%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Bars Cabinet</p>
                   </div>
            </div>

            <div className='w-[25%] '>
            <div className='w-[99%]'>
                          <img src={img4} className='w-[96.5%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Kitchen Cabinet</p>
                   </div>

                   <div className='w-[99%] mt-2'>
                          <img src={img5} className='w-[96.5%] cursor-pointer'/>
                          <p className='text-gray-500 font-medium mt-1'>Extendable Dinning Table</p>
                   </div>
            </div>

         </div>
        
    </div>

  )
}

export default DinningRoom