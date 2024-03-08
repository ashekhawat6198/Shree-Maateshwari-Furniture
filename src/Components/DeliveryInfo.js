import React from "react";

import { CiClock2 } from "react-icons/ci";
import { CiBookmarkMinus } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";

import { RiToolsLine } from "react-icons/ri";
function DeliveryInfo() {
  return (
    <div className="mt-[6.5rem] lg:flex w-[90%] mx-auto gap-x-[3rem] pl-[1rem]">
      <div className="flex flex-col items-center lg:w-[23%] w-[100%]">
        <div className="">
          <CiClock2 fontSize={50} />
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-gray-700">
          30 Days Return
        </h3>
        <p className="text-[16px] mt-[0.6rem] text-gray-500">
          We will provide a 30 days return option
        </p>
      </div>

      <div className="flex flex-col items-center lg:w-[23%] w-[100%] lg:mt-0 mt-7">
        <div>
          <CiBookmarkMinus fontSize={50} />
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-gray-700">
          Free Delivery
        </h3>
        <p className="text-[16px] mt-[0.6rem] text-gray-500">
          We will provide facility of free delivery
          <br />
        </p>
      </div>

      <div className="flex flex-col items-center lg:w-[23%] w-[100%] lg:mt-0 mt-7">
        <div>
          <CiWallet fontSize={50} />
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-gray-700">
          Secure Payments
        </h3>
        <p className="text-[16px] mt-[0.6rem] text-gray-500">
          Secure and risk free payment options
        </p>
      </div>

      <div className="flex flex-col items-center lg:w-[23%] w-[100%] lg:mt-0 mt-7">
        <div>
          <RiToolsLine fontSize={50} />
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-gray-700">
          100% Free Warranty
        </h3>
        <p className="text-[16px] mt-[0.6rem] text-gray-500">
          We will provide free Warranty for one year
        </p>
      </div>
    </div>
  );
}

export default DeliveryInfo;
