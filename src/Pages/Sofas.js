import React from "react";
import img1 from "../assessts/sofaPage/sofa-sale-banner.jpg";
import img2 from "../assessts/sofaPage/sale-2-banner.jpg";
import img3 from "../assessts/sofaPage/banner-3.jpg";
import { L_shapesofa } from "../Data/L-shapedata";
import {singSeatsofadata} from "../Data/singleSeatSofadata";
import {reclinersData} from "../Data/reclinersData";
import { modularSofaData } from "../Data/modularSofaData";
import { Seater3Sofadata } from "../Data/3SeaterSofaData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";
function Sofas() {
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

  function clickHandeler({image,name,price,off,id}){
    console.log(name);
      navigate("/order", { state: {id:id,image:image,name:name,price:price,off:off}})
  }


  return (
    <div className="w-srceen mt-[2rem]">
    
      {/* SALE Banner 1 */}
      <div className="w-[92%] ml-11">
        <img src={img1} className="w-[100%]" />
      </div>

      {/* L-SHAPE SOFA */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          L-Shaped Sofa
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              L_shapesofa.map((item) => (
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

         {/* SINGLE SEAT SOFA */}

         <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          Single Seat Sofa
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              singSeatsofadata.map((item) => (
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


      {/* SALE BANNNER 2 */}
      
      <div className="w-[92.5%] ml-11 mt-[2.5rem]">
        <img src={img2} className="w-[100%]" />
      </div>


        {/* RECLINERS */}


        <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          Recliners Sofa
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              reclinersData.map((item) => (
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

        {/* MODULAR SOFA */}

        <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          Modular Sofa
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              modularSofaData.map((item) => (
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
        <img src={img3} className="w-[100%]" />
      </div>

      {/* 3 SEATER SOFA */}

      <div className="mt-[4.5rem] w-[100%]">
        <h1 className="text-[34px] ml-11 text-gray-700 font-medium">
          3 Seater Sofa
        </h1>
        <div className="mt-[2rem] ml-11 w-[95%] ">
          <Slider {...settings}>
            {
              Seater3Sofadata.map((item) => (
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
  );
}

export default Sofas;
