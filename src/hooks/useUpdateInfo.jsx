import { createContext, useState } from "react";
export const CardContext = createContext();

export const CardInfoProvider = ({ children }) => {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [error, setError] = useState({});
  return (
    <CardContext.Provider
      value={{
        cardHolder,
        setCardHolder,
        cardNumber,
        setCardNumber,
        month,
        setMonth,
        year,
        setYear,
        cvc,
        setCvc,
        error,
        setError,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
