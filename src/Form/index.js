import { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();

    const calculateResult = (amount, currency) => {
        const rate = currencies.find(({ short }) => short === currency).rate;
        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
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
                Result: {!!result && (
                    <span className="form__result">
                        {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                        {" "}
                        {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                    </span>)}
            </p>
            <p className="form__paragraph">
                <button className="form__button">CONVERTE</button>
            </p>
        </form>
    );
};

export default Form;