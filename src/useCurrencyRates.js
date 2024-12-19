import { useState, useEffect } from "react";
import { fetchData } from "./fetchData";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    rates: null,
    date: null,
    status: "loading"
  });

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const data = await fetchData("https://api.currencyapi.com/v3/latest?apikey=cur_live_7FWEWB87poh1GHErPdhcgsQJMLwcfR1paW3kL5TY&currencies=&base_currency=PLN");
        setRatesData(data);
      };

      getData();
    }, 2000);
  }, []);

  return ratesData;
};