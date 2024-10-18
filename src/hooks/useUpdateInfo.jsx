import { createContext, useState } from "react";
export const CardContext = createContext();

export const CardInfoProvider = ({ children }) => {
  const [cardHolder, setCardHolder] = useState("Jane Appleseed");
  const [cardNumber, setCardnumber] = useState("0000000000000000");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("24");
  const [cvc, setCvc] = useState("123");

  return (
    <CardContext.Provider
      value={{
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
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
