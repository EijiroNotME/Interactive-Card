import React from "react";
import circledCheck from "../../assets/images/icon-complete.svg";
import Button from "../button/Button";
import { useReset } from "../../hooks/useReset";

const Success = () => {
  const reset = useReset();
  return (
    <div className="w-[28rem] p-10 flex flex-col gap-12 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <img src={circledCheck} alt="" className="w-16 h-16 mb-5" />
        <h1 className="uppercase text-accent text-2xl font-semibold tracking-widest">
          Thank you!
        </h1>
        <p className="text-sm font-bold text-accent-LIGHT">
          We've added your card details
        </p>
      </div>
      <Button text={"Continue"} onClick={reset} />
    </div>
  );
};

export default Success;
