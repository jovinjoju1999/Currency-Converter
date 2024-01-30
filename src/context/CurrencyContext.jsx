import { createContext, useState } from "react";


export const CurrencyContext = createContext();


const CurrencyProvider = ({ children }) => {
    const [fromCurrency, setFromCurrency]= useState("🇮🇳 INR - India");
    const [toCurrency, setToCurrency]= useState("🇺🇸 USD - United States");


    const value = {
        fromCurrency, 
        setFromCurrency, 
        toCurrency, 
        setToCurrency
    };

  return (
    <CurrencyContext.Provider value={value}>
        { children }
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider