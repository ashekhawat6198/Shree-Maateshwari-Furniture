import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assessts/homeDecor/homeDecorPage/banner1.jpg";
import img2 from "../assessts/sofaPage/banner-3.jpg";

import { keyHolder } from '../Data/keyHolder';
import {wallShelf} from '../Data/wallShelf';
import { wallMirrors } from '../Data/wallMirrors';
import { temple } from '../Data/temple';
import {useNavigate} from "react-router-dom";
function Decor() {

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
        
        {/* KEY HOLDER */}

        <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          KEY HOLDERS
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              keyHolder.map((item) => (
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


      {/* WALL SHELVES */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          WALL SHELVES
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              wallShelf.map((item) => (
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

      {/* BANNER 2 */}

      <div className="w-[92.5%] ml-11 mt-[2.5rem]">
        <img src={img2} className="w-[100%]" />
      </div>


      {/* WALL MIRRORS */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          WALL MIRRORS
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              wallMirrors.map((item) => (
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


      {/* HOME TEMPLES */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          HOME TEMPLE
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              temple.map((item) => (
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

export default Decor