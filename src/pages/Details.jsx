import React, { useContext } from "react";

import Forms from "../components/form/Forms";
import FrontCard from "../components/card/FrontCard.jsx";
import RearCard from "../components/card/RearCard.jsx";
import { SuccessContext } from "../hooks/useSuccessfulSubmit";
import Success from "../components/Success/Success";
import Gradient from "../components/Gradient/Gradient";

const Details = () => {
  const { isSuccess } = useContext(SuccessContext);
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
      <div className="h-screen grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1">
          {/* <img
            className="h-screen w-[100%] hidden lg:block"
            src={sideGradient}
            alt=""
          /> */}
          <Gradient />
        </div>
        <div className="col-span-2 h-full flex items-center justify-center md:pl-24 2xl:pl-0">
          {isSuccess ? <Success /> : <Forms />}
        </div>
      </div>
    </div>
  );
};

export default Details;
