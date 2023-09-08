import { useState, useEffect } from 'react';

export const useCurrencyRates = () => {
    const [ratesData, setRatesData] = useState({
        rates: "",
        date: null,
        status: "loading",
    });

    const url = "https://api.exchangerate.host/latest?base=PLN";

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    const currencies = await response.json();
                    setRatesData({
                        rates: currencies.rates,
                        date: currencies.date,
                        status: "success",
                    });
                } catch {
                    setRatesData({
                        status: "error",
                    });
                }
            })();
        }, 1000);
    }, []);

    return ratesData;
};