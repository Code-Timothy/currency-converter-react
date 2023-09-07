import { useState, useEffect } from 'react';

export const useCurrencyRates = () => {
    const [ratesData, setRatesData] = useState({
        rates: "",
        date: null,
        status: "loading",
    });

    useEffect(() => {
        const baseCurrency = "PLN";
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch(`https://api.exchangerate.host/latest?base=${baseCurrency}`);
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    const currencies = await response.json();
                    setRatesData({
                        rates: currencies.rates,
                        date: currencies.date,
                        status: "success",
                    });
                } catch (error) {
                    console.error(error);
                    setRatesData({
                        status: "error",
                    });
                }
            })();
        }, 1000);
    }, []);

    return ratesData;
};