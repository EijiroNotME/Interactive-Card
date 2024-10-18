import React from "react";
import sideGradient from "../assets/images/bg-main-desktop.png";
import Forms from "../components/form/Forms";
import FrontCard from "../components/card/FrontCard";
import RearCard from "../components/card/RearCard";
const Details = () => {
  return (
    <div className="relative">
      <div className="">
        <div className="absolute left-32 2xl:left-80 top-20 2xl:top-52">
          <FrontCard />
        </div>

        <div className="absolute left-52 2xl:left-[25rem] top-[22rem] 2xl:top-[30rem]">
          <RearCard />
        </div>
      </div>
      <div className="h-screen grid grid-cols-3">
        <div className="col-span-1">
          <img className="h-screen w-[100%]" src={sideGradient} alt="" />
        </div>
        <div className="col-span-2 h-full flex items-center justify-center pl-24 2xl:pl-0">
          <Forms />
        </div>
      </div>
    </div>
  );
};

export default Details;
