import React from 'react'
import { kidsItem } from '../KidsRoomItem'
function KidsRoom() {
  return (
    <div className='w-screen mt-[3rem]'>
    <h1 className='mt-[2rem] text-[34px] ml-11 text-gray-700 font-medium'>Kids Room Furniture</h1>
    <p className='mt-[-3px] ml-11 text-[20px] text-gray-500'>Don't cry because it's over, smile because it happened.</p>
    <div className='w-[94.8%] mx-auto mt-5 flex flex-wrap gap-x-[2.5rem] gap-y-[1.5rem] pl-2'>
        {
             kidsItem.map((item)=>(
                <div className='xl:w-[22%] lg:w-[30%] md:w-[46%] sm:w-[95%] w-[98%] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md mb-3 pb-2 h-[350px] cursor-pointer mt-1'>
                    <div className='w-[93%] ml-3 mt-3 overflow-hidden h-[250px]'>
                        <img src={item.image} className='w-[100%] hover:scale-105 duration-700 h-[100%]'/>
                    </div>
                    <h2 className='text-center mt-3 text-xl text-gray-700 font-medium'>{item.name}</h2>
                    <p className='text-center mt-1 font-medium text-[16px] text-gray-500'>{item.price}</p>
                </div>
             ))
        }
    </div>
</div>
  )
}

export default KidsRoom