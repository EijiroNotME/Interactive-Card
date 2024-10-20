import { useContext } from "react";
import { SuccessContext } from "./useSuccessfulSubmit";
import { CardContext } from "./useUpdateInfo";

export const useReset = () => {
  const { setIsSuccess } = useContext(SuccessContext);
  const {
    setCardHolder,
    setCardNumber,
    setMonth,
    setYear,
    setCvc,
    cardHolder,
    cardNumber,
    month,
    year,
    cvc,
  } = useContext(CardContext);

  const reset = () => {
    setIsSuccess(false),
      setCardHolder(""),
      setCardNumber(""),
      setMonth(""),
      setYear(""),
      setCvc("");
  };
  const submitData = {
    cardHolder,
    cardNumber,
    month,
    year,
    cvc,
  };

  console.log(JSON.stringify(submitData, null, 2));
  return reset;
};
