export const fetchCurrencyData = async () => {
    try {
        const response = await fetch(
            "https://api.currencyapi.com/v3/latest?apikey=cur_live_7FWEWB87poh1GHErPdhcgsQJMLwcfR1paW3kL5TY&currencies=&base_currency=PLN"
        );

        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();

        return {
            rates: data.data,
            date: data.meta.last_updated_at,
            status: "success",
        };
    } catch {
        return {
            status: "error",
        };
    }
};