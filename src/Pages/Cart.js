import { useCart } from "react-use-cart";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { GiAutoRepair } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

import img1 from "../assessts/cart/emptyCart.png";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { bedData } from "../Data/bedsData";

function Cart() {
  

const {
  isEmpty,
  totalItems,
  totalUniqueItems,
  items,
  cartTotal,
  updateItemQuantity,
  removeItem,
  emptyCart
}=useCart();



  const navigate = useNavigate();
 
  function clickHandeler() {
    navigate("/shop");
  }


 

  return (
    <div className="w-screen    mt-10 overflow-y-auto">
      {items.length > 0 ? (
        <div className="w-[90%] mx-auto flex 2xl:flex-row flex-col gap-x-[5rem] pl-5 pt-2 pb-2  ">
          <div className="2xl:w-[65%] w-[85%] mx-auto   pb-3 overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            {items.map((item) => (
              <div className="w-[90%] flex 2xl:flex-row xl:flex-row lg:flex-row flex-col ml-8 mt-10 pb-9 pt-3 border-b-2">
                <div className="2xl:w-[32%] xl:w-[30%] lg:w-[30%] w-[90%] ">
                  <img src={item.image} className="w-[100%]" />
                </div>

                <div className="ml-4">
                  <p className="text-[25px] font-semibold">{item.name}</p>
                  <div className="flex gap-x-5 mt-2">
                    <p className="font-semibold text-[19px]">
                      Rs.{" "}
                      {new Intl.NumberFormat("en-IN").format(item.price)}
                    </p>
                    <p className="text-green-500 font-semibold text-[19px]">
                      {item.off}
                    </p>
                  </div>
                  <p className="mt-2 text-[19px] font-semibold">
                    {" "}
                    Installation Charge :{" "}
                    <span className="text-[16px] font-medium"> Rs. 500</span>
                  </p>
                  <div className="flex items-center gap-x-10">
                    <p className="mt-4 text-xl font-medium">Quantity:</p>

                    <div className="flex mt-4 items-center border py-1">
                      <div
                        className="pl-2 border-r-[2px] pr-2 cursor-pointer"
                        onClick={() => updateItemQuantity(item.id,item.quantity+1)}
                      >
                        <IoMdAdd fontSize={25} />
                      </div>
                      <p className="pl-3 pr-3 text-[21px]">
                        {item.quantity}
                      </p>
                      <div
                        className="pl-3 pr-2 border-l-[2px] cursor-pointer"
                        onClick={() => updateItemQuantity(item.id,item.quantity-1)}
                      >
                        <IoMdRemove fontSize={25} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex relative h-[35px] cursor-pointer">
                    <MdDelete
                      fontSize={30}
                      onClick={() => removeItem(item.id)}
                    />
                    <p
                      className="absolute left-9  text-[20px] font-semibold text-gray-600"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="2xl:w-[25.5%] w-[85%] mx-auto  2xl:mt-0 mt-7 h-[455px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h2 className="mt-2 ml-3 flex justify-around text-[20px] font-semibold border-b-2 mr-3 pb-3">
              Price Details ({totalItems} items)
            </h2>
            <div className="mt-4  border-b-2 mr-3 pb-4 ">
              <p className="text-xl flex justify-around font-medium text-gray-500">
                MRP:{" "}
                <span className="ml-[11rem] text-black">{cartTotal}</span>{" "}
              </p>
            </div>

            <div className="mt-4  border-b-2 mr-3 pb-4 ">
              <p className="text-xl flex justify-around font-medium text-gray-500 uppercase">
                Installation Charge:{" "}
                <span className="ml-[1.1rem] text-black">
                  {totalItems * 500}
                </span>{" "}
              </p>
            </div>

            <div className="mt-4  border-b-2 mr-3 pb-6 ">
              <p className="text-xl flex justify-around font-medium text-gray-500 uppercase">
                Delivery Charge:{" "}
                <span className="ml-[4.1rem] text-black">
                  {totalItems * 1000}
                </span>{" "}
              </p>
            </div>

            <div className="mt-5  border-b-2 mr-3 pb-4 ">
              <p className="text-[25px] flex justify-around font-medium text-gray-600 uppercase">
                Total PAYABLE:{" "}
                <span className="ml-[1.7rem] text-black">
                  {cartTotal + totalItems * 500 + totalItems * 1000}
                </span>{" "}
              </p>
            </div>

            <div className="mt-7 mr-3 ml-2 pb-4 ">
              <p className="text-sm flex justify-around font-medium text-green-500 uppercase">
                Congratulations! You’ve just saved Rs 25% on your order.{" "}
              </p>
            </div>

            <button className="bg-[#CB8D5B] py-3 px-3 rounded-md   text-white font-semibold w-[21rem] ml-1">
              PLACE ORDER
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  items-center">
          <img src={img1} className="w-[30%]" />
          <h1 className="text-[2rem] font-semibold text-gray-700">
            Your Cart is Empty
          </h1>
          <button className="mt-7 bg-[#CB8D5B] py-3 px-3 rounded-md  text-white font-medium w-[17rem] relative">
            <p className="font-bold" onClick={clickHandeler}>
              SHOP NOW
            </p>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;


