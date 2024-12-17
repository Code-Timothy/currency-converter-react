import { useState, useEffect } from "react";

export const useCurrencyRates = () => {
  const [ratesData, setRatesData] = useState({
    rates: null,
    date: null,
    status: "loading"
  });

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://gist.githubusercontent.com/Code-Timothy/5b66b0529ce7b2de9374a373b27bba7e/raw/1a68a39879785d0004003f0286d358aceb872b0e/currencies.json"
          );

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const data = await response.json();

          setRatesData({
            rates: data.data,
            date: data.meta.last_updated_at,
            status: "success",
          });
        } catch (error) {
          console.error(error);
          setRatesData({
            status: "error",
          });
        }
      };

      fetchData();
    }, 2000);
  }, []);

  return ratesData;
};