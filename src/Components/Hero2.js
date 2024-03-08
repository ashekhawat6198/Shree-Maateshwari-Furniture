import React, { useState } from "react";
import { trendingProducts } from "../topPicks";
import { moretrendingProducts } from "../MoreToppicks";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useCart } from "react-use-cart";

function Hero2() {
  const { addItem } = useCart();
  const [showMore, setShowMore] = useState(false);

  function clickHandeler() {
    setShowMore(() => !showMore);
  }

  function addToCart(item) {
    addItem(item);
  }

  

  return (
    <div className="w-[90%] mt-[6rem] mx-auto flex flex-col items-center ">
      <h2 className="text-[2.5rem] font-semibold  text-gray-700 tracking-wide">
        Top Picks For You
      </h2>
      <div className="h-[3px] w-[200px] bg-[#CB8D5B]  mt-1"></div>
      <p className="mt-[0.9rem] text-gray-500">
        Find a bright ideal to suit your taste with our great selection of
        suspension, floor and table lights.
      </p>
      <div className="flex flex-wrap w-[100%] mt-[4rem]  2xl:pl-[12rem] xl:pl-[12rem] lg:pl-[12rem] md:pl-[12rem] sm:pl-[12rem] pl-[3rem] gap-x-[2rem] ">
        {showMore
          ? moretrendingProducts.map((p) => (
              <div className="2xl:w-[25%] xl:w-[40%] lg:w-[40%] md:w-[70%] sm:w-[70%] w-[70%]   cursor-pointer relative group">
                <div className="bg-[#F6F7F7] h-[300px] w-[100%]  flex justify-center items-center rounded-[10px]">
                  <img src={p.image} alt="clock-image" className="w-[55%]" />
                </div>
                <p className="mt-1 mb-6 text-gray-500 font-medium">{p.name}</p>

                <div className="absolute top-[15.7rem] left-[1rem]  flex gap-5 group-hover:translate-y-[-1rem] duration-200 opacity-0 group-hover:opacity-100 ">
                  <div
                    className="rounded-full bg-[#111111] w-[43px] h-[43px] "
                    onClick={() => addToCart(p)}
                  >
                    <CiShoppingCart
                      color="white"
                      fontSize={25}
                      className="mt-2 ml-2"
                    />
                  </div>
                </div>
              </div>
            ))
          : trendingProducts.map((p) => (
              <div className="2xl:w-[25%] xl:w-[40%] lg:w-[40%] md:w-[70%] sm:w-[70%] w-[70%]   cursor-pointer relative group">
                <div className="bg-[#F6F7F7] h-[300px] w-[100%]  flex items-center justify-center rounded-[10px]">
                  <img src={p.image} alt="clock-image" className="w-[200px]" />
                </div>
                <p className="mt-1 mb-6 text-gray-500 font-medium">{p.name}</p>

                <div className="absolute top-[15.7rem] left-[1rem]  flex gap-5 group-hover:translate-y-[-1rem] duration-200 opacity-0 group-hover:opacity-100 ">
                  <div
                    className="rounded-full bg-[#111111] w-[43px] h-[43px] "
                    onClick={() => addToCart(p)}
                  >
                    <CiShoppingCart
                      color="white"
                      fontSize={25}
                      className="mt-2 ml-2"
                    />
                  </div>
                </div>
              </div>
            ))}
      </div>

      <button
        className="mt-7 bg-[#CB8D5B] py-2 px-3 rounded-md  text-white font-medium w-[12rem]"
        onClick={clickHandeler}
      >
        {showMore ? "Show Less" : "Show More"}{" "}
      </button>
    </div>
  );
}

export default Hero2;
