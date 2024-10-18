import React, { useContext } from "react";
import frontCard from "../../assets/images/bg-card-front.png";
import cardLogo from "../../assets/images/card-logo.svg";
import { CardContext } from "../../hooks/useUpdateInfo";

const FrontCard = () => {
  const {
    cardHolder = "Default Holder",
    cardNumber = "0000 0000 0000 0000",
    month = "MM",
    year = "YY",
  } = useContext(CardContext);
  return (
    <div className="relative shadow-2xl shadow-black/50 rounded-lg">
      <img src={frontCard} alt="" />
      <div className="absolute top-0 p-7 h-full w-full ">
        <img src={cardLogo} alt="" />
        <div className="absolute w-[87%] bottom-7 text-primary">
          <div className="flex flex-col w-full gap-6">
            <h1 className="text-2xl tracking-widest">{[cardNumber]}</h1>
            <div className="flex flex-row justify-between tracking-widest uppercase font-light text-xs">
              <h2>{[cardHolder]}</h2>
              <h2>
                <span>{[month]}</span>/<span>{[year]}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
