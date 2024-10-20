import React from "react";
import sideGradient from "../../assets/images/bg-main-desktop.png";
import topGradient from "../../assets/images/bg-main-mobile.png";
const Gradient = () => {
  return (
    <div className="">
      <img
        src={sideGradient}
        className="h-screen w-[100%] hidden md:block"
        alt=""
      />
      <img src={topGradient} alt="" className="h-60 w-[100%] flex md:hidden" />
    </div>
  );
};

export default Gradient;
