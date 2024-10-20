import { useContext } from "react";
import { SuccessContext } from "./useSuccessfulSubmit";
import { CardContext } from "./useUpdateInfo";

export const useHandleSubmit = (validation) => {
  const { setIsSuccess } = useContext(SuccessContext);
  const { cardHolder, cardNumber, month, year, cvc } = useContext(CardContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      const submitData = {
        cardHolder,
        cardNumber,
        month,
        year,
        cvc,
      };

      console.log(JSON.stringify(submitData, null, 2));
      setIsSuccess(true);
      console.log("Validation successful");
    }
  };

  return handleSubmit;
};
