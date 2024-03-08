import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";
import { IoIosFlash } from "react-icons/io";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

function Order() {
  const data = useLocation();

  const { addItem } = useCart();

  const navigate = useNavigate();

  function clickHandeler(item) {
    addItem(item);
    navigate("/cart")
  }

  function addToCart(item) {
    
    toast.success("Item Added");
    addItem(item);
   
  }

  return (
    <div className="w-screen mt-[0.5rem] ml-[2.5rem] flex 2xl:flex-row xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col  gap-x-8 overflow-y-hidden">
      <div className="2xl:w-[47%]  xl:w-[45%] lg:w-[85%] md:w-[87%] sm:w-[90%] w-[91%] rounded-md mt-[16px] h-[568px] ">
        <img src={data.state.image} className="w-[100%] h-[100%]" />
      </div>

      <div className="2xl:w-[48%] xl:w-[45%] lg:w-[85%] md:w-[87%] sm:w-[90%]  w-[91%]  pr-[5rem]">
        <h1 className="text-[2.6rem] font-semibold text-[#374151]">
          {data.state.name}
        </h1>
        <div className="flex gap-x-7 mt-2 ">
          <h3 className="text-[2.3rem] font-medium">Rs.{data.state.price}</h3>
          <h4 className="text-[1.5rem] text-green-600 mt-[14px] font-medium">
            {data.state.off}
          </h4>
        </div>
        <div className="w-[99%] h-[1px] mt-2 bg-gray-300 "></div>
        <p className="text-[#F3601E] text-[24px] mt-3 font-medium">
          Special Offers
        </p>
        <p className="text-[18px] mt-1">
          {" "}
          <span className="font-semibold">Republic Day Sale -</span> Apply
          Coupon JAIHIND & Get Upto 20% Off (price inclusive of discount) T&C
        </p>
        <p className="text-[18px] mt-2">
          <span className="font-semibold">Store Discount -</span> Get upto 10%
          off on orders placed at your nearest experience stores T&C
        </p>
        <p className="text-[18px] mt-2">
          {" "}
          <span className="font-semibold">No Cost EMI -</span> Available on Net
          Cart Value of Rs 39,990 and Above!
        </p>
        <div className="w-[99%] h-[1px] mt-5 bg-gray-300 "></div>

        <div className="flex gap-x-10 ">
          <button
            className="mt-7 bg-[#CB8D5B] py-3 px-3 rounded-md  text-white font-medium w-[17rem] relative"
            onClick={() => addToCart(data.state)}
          >
            <FaCartShopping fontSize={22} className="absolute left-12 top-19" />
            <p className="font-bold">
              {}
              ADD TO CART
            </p>
          </button>

          <button
            className="mt-7 bg-[#CB8D5B] py-3 px-3 rounded-md  text-white font-medium w-[17rem] relative"
            onClick={()=>clickHandeler(data.state)}
          >
            <IoIosFlash fontSize={27} className="absolute left-16 top-19" />
            <p className="font-bold">BUY NOW</p>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Order;
