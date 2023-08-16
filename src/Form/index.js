import { useState } from "react";
import { currencies } from "./currencies";
import Paragraph from "./Paragraph/index";
import Info from "./Info/index";
import Select from "./Select/index";
import Result from "./Result/index";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [result, setResult] = useState({
        fromCurrency: "",
        toCurrency: "",
        value: 0,
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const calculateResult = () => {
        const selectedCurrencyRate = currencies.find((currency) => currency.short === selectedCurrency).rate;
        const convertedAmount = amount / selectedCurrencyRate;

        setResult({
            fromCurrency: "PLN",
            toCurrency: selectedCurrency,
            value: convertedAmount,
        });
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>

                <Paragraph
                    labelContent="Wybierz walutę :"
                    body={<Select selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />}
                />

                <Paragraph
                    labelContent="Wpisz kwotę w PLN :"
                    body={
                        <input
                            className="form__input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            id="amount"
                            type="number"
                            name="amount"
                            step="0.1"
                            min="0"
                            required
                        />
                    }
                />

                <Result result={result} amount={amount} />

                <p className="form__paragraph">
                    <button onClick={() => calculateResult()} className="form__button">Przelicz</button>
                </p>

                <Info info="*Kursy walut są z dnia 08.08.2023 ze strony NBP.*" />
            </fieldset>
        </form>
    )
};

export default Form;