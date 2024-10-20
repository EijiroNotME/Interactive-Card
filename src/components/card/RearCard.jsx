import React, { useContext } from "react";
import rearCard from "../../assets/images/bg-card-back.png";
import { CardContext } from "../../hooks/useUpdateInfo";
const RearCard = () => {
  const { cvc } = useContext(CardContext);
  const defaultCvc = cvc || "1234";
  return (
    <div className="relative shadow-2xl shadow-black/50 rounded-lg">
      <img src={rearCard} alt="" />
      <div className="absolute top-0 p-7 h-full w-full ">
        <div className="absolute w-[87%] bottom-[7rem] left-2 text-primary">
          <h1 className=" tracking-widest text-right">{defaultCvc}</h1>
        </div>
      </div>
    </div>
  );
};

export default RearCard;
