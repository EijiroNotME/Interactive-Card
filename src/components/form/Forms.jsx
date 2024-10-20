import React, { useContext } from "react";
import Button from "../button/Button";
import DefaultInput from "../Input/defaultInput";
import DateInput from "../Input/DateInput";
import CvcInput from "../Input/CvcInput";
import { CardContext } from "../../hooks/useUpdateInfo";
import { handleSubmit } from "../../hooks/useHandleSubmit";
import { useValidation } from "../../hooks/useValidation";
import { formatCardNumber } from "../../utils/formatCardNumber";

const Forms = () => {
  const validation = useValidation();
  const submit = handleSubmit(validation);

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
    error,
  } = useContext(CardContext);

  const dateInputProps = {
    text: "Exp. Date (MM/YY)",
    monthPlaceholder: "MM",
    monthValue: month,
    monthOnChange: (e) => setMonth(e.target.value),
    yearPlaceholder: "YY",
    yearValue: year,
    indicator: error.month || error.year, // Show month/year error
    yearOnChange: (e) => setYear(e.target.value),
  };

  return (
    <form typeof="submit" className="p-10 w-[28rem]" onSubmit={submit}>
      <div className="flex flex-col gap-6">
        <DefaultInput
          text={"Card Holder Name"}
          value={cardHolder}
          placeholder={"e.g Jane Appleseed"}
          indicator={error.cardHolder} // Individual error for card holder
          onChange={(e) => setCardHolder(e.target.value)}
        />
        <DefaultInput
          text={"Card Number"}
          value={cardNumber}
          placeholder={"e.g 1234 5678 9123 0000"}
          indicator={error.cardNumber} // Individual error for card number
          onChange={(e) => setCardnumber(formatCardNumber(e.target.value))}
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <DateInput {...dateInputProps} />
          </div>
          <div>
            <CvcInput
              text={"Cvc"}
              placeholder={"e.g 123"}
              value={cvc}
              indicator={error.cvc} // Individual error for CVC
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button text={"Confirm"} />
        </div>
      </div>
    </form>
  );
};

export default Forms;
