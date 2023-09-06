import { useState, useEffect } from 'react';

export const useCurrencyRates = () => {
    const [ratesData, setRatesData] = useState({
        rates: "",
        date: null,
        status: "pending",
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest");
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
            }
        })();
    }, []);

    return ratesData;
};