import React from "react";
import img1 from "../assessts/collection1.webp";
import img2 from "../assessts/collection2.webp";
import img3 from "../assessts/collection3.webp";
import img4 from "../assessts/collection4.webp";
import { useNavigate } from "react-router-dom";
function Collection() {
  const navigate=useNavigate();


  function livingclickHnadler(){
    navigate("/shop/living");
  }

  function homedecorClickHandeler(){
    navigate("/shop/decor");
  }

function dinningClickHandeler(){
  navigate("/shop/dinning")
}


function kidsClickHandeler(){
  navigate("/shop/kids")
}



  return (
    <div className="mt-[6rem] w-[screen]">
    <div className="flex flex-col items-center">
    <h1 className="text-[2.5rem] font-semibold  text-gray-700 tracking-wide text-center">Our Collection</h1>
      <div className="h-[3px] w-[200px] bg-[#CB8D5B]  mt-1"></div>
    </div>
     
      <div className="mt-[4.3rem] flex  flex-wrap gap-[2rem] w-[100%]">
        <div className="2xl:w-[22%] xl:w-[28%] lg:w-[43%] md:w-[44%] sm:w-[95%] w-[90%] ml-4 relative lg:ml-10 md:ml-5 sm:ml-3 group overflow-hidden cursor-pointer" onClick={livingclickHnadler}>
            <img src={img1} className=" w-[100%] group-hover:scale-105 duration-500" />
            <div className="absolute bottom-5 left-3 bg-white w-[24rem] 2xl:w-[19rem] xl:w-[17rem] lg:w-[26rem] md:w-[20rem]   sm:w-[35rem] p-[7px]  group-hover:bg-black duration-700">
              <p className="ml-2 text-md font-medium text-gray-500 group-hover:text-white duration-500">Living Room </p>
            </div>
        </div>

        <div className="2xl:w-[22%] xl:w-[28%] lg:w-[43%] md:w-[44%] sm:w-[95%] w-[90%] ml-4 sm:ml-3 2xl:ml-0 relative group overflow-hidden cursor-pointer" onClick={homedecorClickHandeler}>
            <img src={img2} className=" w-[100%] group-hover:scale-105 duration-500"/>
            <div className="absolute bottom-5 left-3 bg-white w-[24rem]  2xl:w-[19rem] xl:w-[17rem] lg:w-[26rem] md:w-[20rem]  sm:w-[35rem] p-[7px] group-hover:bg-black duration-700">
              <p className="ml-2 text-md font-medium text-gray-500 group-hover:text-white duration-700" >Home Decor </p>
            </div>
        </div>

        <div className="2xl:w-[22%] xl:w-[28%] lg:w-[43%] md:w-[44%] sm:w-[95%] w-[90%] ml-4 lg:ml-10 xl:ml-0 md:ml-5 sm:ml-3 relative group overflow-hidden cursor-pointer" onClick={dinningClickHandeler}>
            <img src={img3} className=" w-[100%] group-hover:scale-105 duration-500"/>
            <div className="absolute bottom-5 left-3 bg-white w-[24rem] 2xl:w-[19rem] xl:w-[17rem] lg:w-[26rem] md:w-[20rem]  sm:w-[35rem] p-[7px] group-hover:bg-black duration-700">
              <p className="ml-2 text-md font-medium text-gray-500 group-hover:text-white duration-700">Dinning Room </p>
            </div>
        </div>

        <div className="2xl:w-[22%] xl:w-[28%] lg:w-[43%] md:w-[44%] sm:w-[95%] w-[90%] ml-4 sm:ml-3 2xl:ml-0 xl:ml-10 relative group overflow-hidden cursor-pointer" onClick={kidsClickHandeler}>
            <img src={img4} className=" w-[100%] group-hover:scale-105 duration-500"/>
            <div className="absolute bottom-5 left-3 bg-white w-[24rem] 2xl:w-[19rem] xl:w-[17rem] lg:w-[26rem] md:w-[20rem] sm:w-[35rem] p-[7px] group-hover:bg-black duration-700">
              <p className="ml-2 text-md font-medium text-gray-500 group-hover:text-white duration-700">Kids Room </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
