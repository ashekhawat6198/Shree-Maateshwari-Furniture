import React from "react";
import img1 from "../assessts/contactPage/main-image.jpg";
import { CiPhone } from "react-icons/ci";
import { MdOutlineLocationOn, MdAddCall, MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="w-screen">
      <div className="bg-[#B6B6B6] w-[100%] h-[594px] overflow-hidden cursor-pointer relative z-0">
        <img
          src={img1}
          className="w-[100%] h-[100%] object-fit duration-500  "
        />
      
      </div>

      <div className="  z-10 flex mt-[4rem] relative w-[90%]  mx-auto h-[500px] ">
        <div className="border 2xl:ml-[16rem] xl:ml-[16rem] lg:ml-[13rem] md:ml-[2rem] mt-[3.5rem] pl-5 pt-5 h-[75%] 2xl:w-[25%] xl:w-[27%] lg:w-[32%] md:w-[36%]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 bg-[#CB8D5B] text-white">
          <h1 className="text-[32px] font-semibold font-serif">Contact Us</h1>
          <div className="flex gap-x-5 mt-4">
            <MdOutlineLocationOn fontSize={98} />
            <p className="text-lg font-medium">
            Shop No. 1 to 7,Besment, After Mahal City, Kalwar Rd, near Anand Bag Marriage Garden, Govindpura, Jaipur, Rajasthan 
            </p>
          </div>
          <div className="flex gap-x-5 mt-8">
            <MdAddCall fontSize={26} />
            <p className="text-lg font-medium">91+ 9561918591</p>
          </div>
          <div className="flex gap-x-5 mt-8">
            <MdEmail fontSize={26} />
            <p className="text-lg font-medium">jharliaman@gmail.com</p>
          </div>
        </div>

        <div className="border 2xl:px-[10rem] xl:px-[10rem] lg:px-[8rem] md:px-[4rem] pt-7 h-[92%] absolute 2xl:left-[30rem] xl:left-[30rem] lg:left-[28rem] md:left-[18.8rem]   top-5 2xl:w-[44%] xl:w-[55%] lg:w-[52%] md:w-[55%] font-sens shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-0">
          <h1 className="text-[34px] font-semibold font-serif">
            GET IN TOUCH{" "}
          </h1>
          <div className="mt-4  flex flex-col">
            <label className="text-[18px] font-medium text-gray-500">
              Enter your Name
            </label>
            <input
              type="text"
              className=" mt-[5px] border-b-2 border-black outline-none"
            />
          </div>
          <div className="mt-5  flex flex-col">
            <label className="text-[18px] font-medium text-gray-500">
              Enter Email Address
            </label>
            <input
              type="email"
              className=" mt-[5px] border-b-2 border-black outline-none"
            />
          </div>
          <div className="mt-5  flex flex-col">
            <label className="text-[18px] font-medium text-gray-500">
              Enter Mobile Number
            </label>
            <input
              type="number"
              className=" mt-[5px] border-b-2 border-black outline-none"
            />
          </div>
          <button className="mt-7 border px-10 bg-[#CB8D5B] rounded-md text-white font-medium py-1">
            Submit
          </button>
        </div>
      </div>


      <h1 className="mb-[4rem] text-[15px] font-medium w-[31%] mx-auto text-center mt-10">
          <span className="ml-3 text-[34px] font-semibold ">Shree Maateshwari Furniture</span> <br/><br/>Shop No. 1 to 7,Besment, After Mahal City,
          Kalwar Rd, near Anand Bag Marriage Garden, Govindpura,
          Jaipur, Rajasthan 302012
        </h1>
      <div className="w-screen h-[400px] overflow-hidden">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.27609696639132!2d75.69772320188717!3d26.9536734576594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4d6d2cce47f3%3A0x6fea0d1995a839e!2sShree%20Mateshwari%20Furniture!5e0!3m2!1sen!2sin!4v1706181030943!5m2!1sen!2sin"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
