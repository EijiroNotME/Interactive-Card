import { useContext } from "react";
import { CardContext } from "./useUpdateInfo";

export const useValidation = () => {
  const { cardHolder, cardNumber, month, year, cvc, setError } =
    useContext(CardContext);

  const confirm = () => {
    let hasError = false; // Track if there are any errors
    const errors = {
      cardHolder: null,
      cardNumber: null,
      month: null,
      year: null,
      cvc: null,
    };

    if (!cardHolder) {
      errors.cardHolder = "Card holder can't be blank";
      hasError = true; // Indicate failure
    }
    if (!cardNumber) {
      errors.cardNumber = "Card number can't be blank";
      hasError = true; // Indicate failure
    }
    if (!month) {
      errors.month = "Month can't be blank";
      hasError = true; // Indicate failure
    }
    if (!year) {
      errors.year = "Year can't be blank";
      hasError = true; // Indicate failure
    }
    if (!cvc) {
      errors.cvc = "CVC can't be blank";
      hasError = true; // Indicate failure
    }

    setError(errors);
    return !hasError; // Return true if no errors
  };

  return confirm;
};
