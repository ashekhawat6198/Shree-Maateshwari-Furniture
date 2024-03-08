import React from 'react'
import img1 from "../assessts/DinningRoom/dinningRoomPage/banner1.jpg";
import { dinningTable } from '../Data/dinningTableData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { crockeryUnits } from '../Data/crockeryUnitsData';
import { barUnits } from '../Data/barUnitsData';
import {useNavigate} from "react-router-dom";
function DinningKitchen() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };

  const navigate=useNavigate();

  function clickHandeler({id,image,name,price,off}){
    console.log(name);
      navigate("/order", { state: {id:id,image:image,name:name,price:price,off:off}})
  }

      
  return (
    <div className="w-srceen mt-[2rem]">

            {/* SALE Banner 1 */}
       <div className="w-[92%] ml-11">
        <img src={img1} className="w-[100%]" />
      </div>



        {/* DINNING TABLE */}


        <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          DINNING TABLES
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              dinningTable.map((item) => (
              <div className="cursor-pointer outline-none border-none" onClick={()=>clickHandeler(item)}>
                <img src={item.image} className="w-[85%] rounded-md" />
                <p className="mt-2 text-xl text-gray-700 font-medium">
                  {item.name}
                </p>
                <div className="flex gap-x-3 mt-1 font-medium text-[16px] ">
                  <p className="text-gray-500 ">Rs. {item.price}</p>
                  <p className="text-green-600">{item.off}</p>
                </div>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>


      {/* CROCKERY UNITS */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          CROCKERY UNITS   
               </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              crockeryUnits.map((item) => (
              <div className="cursor-pointer outline-none border-none" onClick={()=>clickHandeler(item)}>
                <img src={item.image} className="w-[85%] rounded-md" />
                <p className="mt-2 text-xl text-gray-700 font-medium">
                  {item.name}
                </p>
                <div className="flex gap-x-3 mt-1 font-medium text-[16px] ">
                  <p className="text-gray-500 ">Rs. {item.price}</p>
                  <p className="text-green-600">{item.off}</p>
                </div>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>


      {/* BAR CABINETS */}


      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          BAR CABINETS   
               </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              barUnits.map((item) => (
              <div className="cursor-pointer outline-none border-none" onClick={()=>clickHandeler(item)}>
                <img src={item.image} className="w-[85%] rounded-md" />
                <p className="mt-2 text-xl text-gray-700 font-medium">
                  {item.name}
                </p>
                <div className="flex gap-x-3 mt-1 font-medium text-[16px] ">
                  <p className="text-gray-500 ">Rs. {item.price}</p>
                  <p className="text-green-600">{item.off}</p>
                </div>
              </div>
            ))
            }
          </Slider>
        </div>
      </div>


    </div>
  )
}

export default DinningKitchen