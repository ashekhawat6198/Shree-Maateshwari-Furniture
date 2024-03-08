import React from 'react'
import img1 from "../assessts/ad1.jpg";
import img2  from "../assessts/ad2.png";
function Ad1() {
  return (
    
    <div className='mt-[5rem] xl:flex w-[95%] mx-auto'>
   
          <div className='xl:w-[48%] w-[95%]   ml-2'>
            <img src={img1} className='w-[100%]'/>
          </div>

          <div className='xl:w-[48%]  w-[95%] ml-2 mt-5 xl:mt-0'>
            <img src={img2} className='w-[100%]'/>
          </div>
    </div>
  )
}

export default Ad1