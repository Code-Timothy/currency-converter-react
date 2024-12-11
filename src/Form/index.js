import { useState } from "react";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState(0);

    const calculateResult = (amount, selectedCurrencyShort) => {
        const selectedCurrencyRate = currencies.find(currency => currency.short === selectedCurrencyShort).rate;
        setResult(amount / selectedCurrencyRate);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">Enter the amount</span>
                    <input
                        className="form__input"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        min="1"
                        step="0.01"
                        placeholder="Enter the amount in PLN"
                        required
                    />
                </label>
            </p>
            <p className="form__paragraph">
                <label>
                    <span className="form__labelText">Select currency</span>
                    <select
                        className="form__input"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                        name="currency"
                    >
                        {currencies.map((currency) =>
                            <option
                                className="form__option"
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        )}
                    </select>
                </label>
            </p>
            <p className="form__paragraph">
                You will get: <span className="form__result">{result === 0 ? "" : result.toFixed(2)}</span>
            </p>
            <p className="form__paragraph">
                <button className="form__button">CONVERTE</button>
            </p>
        </form>
    );
};

export default Form;