import React from "react";
import { Link } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";
import logo from "../assessts/LOGO.jpg";

function Navbar() {

  
  return (
    <div
      className="w-full flex justify-between items-center 
    "
    >
      <div className=" w-[120px] ml-6">
        <img src={logo} alt="logo" className=" w-[100%]" />
      </div>

      <div className="flex 2xl:gap-x-[3.3rem] xl:gap-x-[3.3rem] lg:gap-x-[3.3rem] md:gap-x-[3.3rem] sm:gap-x-[3.3rem] gap-x-[1.5rem] text-2xl  uppercase ">
        <Link to="/">
          <p className="hover:text-[#CB8D5B] font-semibold duration-200 text-gray-600">
            Home
          </p>
        </Link>
        <Link to="/shop">
          <p className="hover:text-[#CB8D5B] font-semibold duration-200 text-gray-600">
            Shop
          </p>
        </Link>
        <Link to="/contact">
          <p className="hover:text-[#CB8D5B] font-semibold duration-200 text-gray-600">
            Contact
          </p>
        </Link>
      </div>

      <div className="flex  relative h-[100px] items-center ">
        <Link to="/cart">
          <div className=" flex items-center cursor-pointer mt-1 w-[100px]">
            <FaCartShopping fontSize={30} />
           
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
