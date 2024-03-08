import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assessts/bedRoom/banner1.jpg";
import  {bedData} from "../Data/bedsData";
import { dressingTable } from '../Data/dressingTable';
import img2 from "../assessts/sofaPage/banner-3.jpg";
import { wardDrobes } from '../Data/wardDrobesData';
import { sideTables } from '../Data/bedsideTablesData';
import { mattresses } from '../Data/mattressess';
import {useNavigate} from "react-router-dom";

function Bedroom() {


  const navigate=useNavigate();

   
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

function clickHandeler({image,name,price,off,quantity,id}){
  // console.log(name);
    navigate("/order", { state: {id:id,image:image,name:name,price:price,off:off,quantity:quantity}})
}

  return (
    <div className="w-srceen mt-[2rem]">
        

          {/* SALE Banner 1 */}
       <div className="w-[92%] ml-11">
        <img src={img1} className="w-[100%]" />
      </div>
        

         {/* BED */}

         <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          BEDS
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%]  ">
          <Slider {...settings}>
            {
              bedData.map((item) => (
              <div className="cursor-pointer outline-none border-none  " onClick={()=>clickHandeler(item)}>
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

    {/* DRESSING TABLE */}

    <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          DRESSING TABLES
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              dressingTable.map((item) => (
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

       {/* BANNER 3 */}

       <div className="w-[92.5%] ml-11 mt-[2.5rem]">
        <img src={img2} className="w-[100%]" />
      </div>


      {/* WARDROBE */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
         WARDROBES
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              wardDrobes.map((item) => (
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

      {/* BEDSIDE TABLES */}


      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
         BEDSIDE TABLES
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              sideTables.map((item) => (
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


      {/* MATTRESS */}


      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
         MATTRESSES AND PILLOWS
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              mattresses
              .map((item) => (
              <div className="cursor-pointer outline-none border-none " onClick={()=>clickHandeler(item)}>
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

export default Bedroom