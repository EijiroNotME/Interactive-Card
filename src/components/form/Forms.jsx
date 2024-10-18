import React, { useContext } from "react";
import Button from "../button/Button";
import DefaultInput from "../Input/defaultInput";
import DateInput from "../Input/DateInput";
import CvcInput from "../Input/CvcInput";
import { CardContext } from "../../hooks/useUpdateInfo";

const Forms = () => {
  const {
    cardHolder,
    setCardHolder,
    cardNumber,
    setCardnumber,
    month,
    setMonth,
    year,
    setYear,
    cvc,
    setCvc,
  } = useContext(CardContext);

  const dateInputProps = {
    text: "Exp. Date (MM/YY)",
    monthPlaceholder: "MM",
    monthValue: month,
    monthOnChange: (e) => setMonth(e.target.value),
    yearPlaceholder: "YY",
    yearValue: year,
    indicator: "error",
    yearOnChange: (e) => setYear(e.target.value),
  };

  return (
    <form typeof="submit" className="p-10 w-[30rem]">
      <div className="flex flex-col gap-6">
        <DefaultInput
          text={"Card Holder Name"}
          value={cardHolder}
          placeholder={"e.g Jane Appleseed"}
          indicator={"error"}
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <DefaultInput
          text={"Card Number"}
          value={cardNumber}
          placeholder={"e.g 1234 5678 9123 0000"}
          indicator={"error"}
          onChange={(e) => setCardnumber(e.target.value)}
        />
        <div className="flex flex-row gap-4">
          <DateInput {...dateInputProps} />
          <CvcInput
            text={"Cvc"}
            placeholder={"e.g 123"}
            value={cvc}
            indicator={"error"}
            onChange={(e) => setCvc(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <Button text={"Confirm"} value={undefined} />
        </div>
      </div>
    </form>
  );
};

export default Forms;
