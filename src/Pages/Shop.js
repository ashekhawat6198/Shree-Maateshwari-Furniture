import React from "react";
import { Link } from "react-router-dom";
import { totalData } from "../Data/totalData";
import { useNavigate } from "react-router-dom";
function Shop() {
  const navigate = useNavigate();

  function clickHandeler({ category }) {
    navigate("/shop/" + `${category}`);
  }

  return (
    <div className="w-full mt-[2rem] pb-4">
      <header className=" 2xl:w-[55%] xl:w-[60%] lg:w-[68%] md:w-[15%] sm:w-[17%] w-[35%] mx-auto   flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col    2xl:gap-x-[7%] xl:gap-x-[6%] lg:gap-x-[5%] md:gap-y-[6px] sm:gap-y-[5px] gap-y-[5px]  bg-[#F6F7F7] p-5 rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <Link to="/shop/sofa">
          {" "}
          <p className="text-xl text-gray-500 font-medium italic  hover:text-[#CB8D5B] cursor-pointer duration-500 ">
            Sofas
          </p>
        </Link>

        <Link to="/shop/living">
          {" "}
          <p className="text-xl text-gray-500 font-medium italic  cursor-pointer hover:text-[#CB8D5B] duration-500">
            Living
          </p>
        </Link>

        <Link to="/shop/bedroom">
          <p className="text-xl text-gray-500 font-medium italic  cursor-pointer hover:text-[#CB8D5B] duration-500">
            Bedroom
          </p>
        </Link>

        <Link to="/shop/dinning">
          <p className="text-xl text-gray-500 font-medium italic  cursor-pointer hover:text-[#CB8D5B] duration-500">
            Dinning & Kitchen
          </p>
        </Link>

        <Link to="/shop/kids">
          <p className="text-xl text-gray-500 font-medium italic  cursor-pointer hover:text-[#CB8D5B] duration-500">
            Kids Room
          </p>
        </Link>

        <Link to="/shop/decor">
          <p className="text-xl text-gray-500 font-medium italic  cursor-pointer hover:text-[#CB8D5B] duration-500">
            Decor
          </p>
        </Link>
      </header>

      <div className="w-[80%] mx-auto  flex flex-wrap gap-x-[12px]  gap-y-7 mt-[3rem] pt-2 pb-3">
        {totalData.map((item) => (
          <div key={item.name}
            className="2xl:w-[32%] xl:w-[45%] lg:w-[85%] lg:ml-10  2xl:ml-2 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md pb-5"
            onClick={() => clickHandeler(item)}
          >
            <div className="w-[92%] mx-auto  mt-4">
              <img src={item.image} className="w-[100%]" />
            </div>

           

            <p className="font-semibold text-gray-500 text-center uppercase mt-4 text-xl"> {item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Shop;
