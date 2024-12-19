import { useState, useEffect } from "react";
import { fetchCurrencyData } from "./fetchData";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    rates: null,
    date: null,
    status: "loading"
  });

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const data = await fetchCurrencyData();
        setRatesData(data);
      };

      getData();
    }, 2000);
  }, []);

  return ratesData;
};