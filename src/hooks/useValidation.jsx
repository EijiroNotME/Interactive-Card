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
    //Card Holder Validation
    if (!cardHolder) {
      errors.cardHolder = "Card holder can't be blank";
      hasError = true; // Indicate failure
    }

    //Card Number Validation
    if (!cardNumber) {
      errors.cardNumber = "Card number can't be blank";
      hasError = true; // Indicate failure
    } else if (!/^\d+$/.test(cardNumber.replace(/\s+/g, ""))) {
      errors.cardNumber = "Wrong format, numbers only"; // Set error for wrong format
      hasError = true; // Indicate failure
    } else if (cardNumber.replace(/\s+/g, "").length !== 16) {
      errors.cardNumber = "Wrong format, numbers should be exactly 16 digits"; // Corrected message
      hasError = true; // Indicate failure
    }

    //Month Validation
    if (!month) {
      errors.month = "Month can't be blank";
      hasError = true; // Indicate failure
    } else if (!/^\d+$/.test(month)) {
      errors.month = "Wrong format, numbers only";
      hasError = true; // Indicate failure
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      // Added check for valid month range
      errors.month = "Month must be between 1 and 12";
      hasError = true; // Indicate failure
    }

    //Year Validation
    if (!year) {
      errors.year = "Year can't be blank";
      hasError = true; // Indicate failure
    } else if (!/^\d+$/.test(year)) {
      errors.year = "Wrong format, numbers only";
      hasError = true; // Indicate failure
    }

    //CVC Validation
    if (!cvc) {
      errors.cvc = "cvc can't be blank";
      hasError = true; // Indicate failure
    } else if (!/^\d+$/.test(cvc)) {
      errors.cvc = "Wrong format, numbers only";
      hasError = true; // Indicate failure
    } else if (
      cvc.replace(/\s+/g, "").length < 3 ||
      cvc.replace(/\s+/g, "").length > 4
    ) {
      // Updated length check for CVC to allow 3 or 4 digits
      errors.cvc = "Wrong format, cvc should be exactly 3 or 4 digits"; // Corrected message
      hasError = true; // Indicate failure
    }

    setError(errors);
    return !hasError; // Return true if no errors
  };

  return confirm;
};
