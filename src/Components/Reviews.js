import React from 'react'
import { reviews } from '../reviews';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Reviews() {

 
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000
    };
  return (
    <div className='mt-[5.5rem] '>
    <div className="flex flex-col items-center">
    <h1 className='text-[2.5rem] font-semibold  text-gray-700 tracking-wide text-center'>Our Testimonials</h1>
    <div className="h-[3px] w-[200px] bg-[#CB8D5B]  mt-1"></div>
    </div>
        <div className='w-3/4 mx-auto mt-[3rem] h-[100%]'>
        <Slider {...settings}>
            {
               reviews.map((r)=>(
                <div className=' flex flex-row p-10 h-[80%] items-center justify-center '>
                  <div className='w-[100%] flex justify-center items-center'>
                  <img src={r.image} className='w-[40%]  rounded-[50%] text-center'/>
                  </div>
                    
                    <h3 className='text-center mt-5 text-[25px] text-gray-700 font-semibold'>{r.name}</h3>
                    <p className='mt-1 text-[13px] ml-5 text-gray-500 font-medium'>{r.review}</p>
                </div>
               ))
            }
            </Slider>
        </div>

       
    </div>
  )
}

export default Reviews