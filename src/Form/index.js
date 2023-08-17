import { useState } from "react";
import { currencies } from "./currencies";
import Paragraph from "./Paragraph/index";
import Info from "./Info/index";
import Select from "./Select/index";
import Result from "./Result/index";
import Button from "./Button/index";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [result, setResult] = useState({
        amount: 0,
        fromCurrency: "",
        toCurrency: "",
        value: 0,
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        setAmount("");
    };

    const calculateResult = () => {
        const selectedCurrencyRate = currencies.find((currency) => currency.short === selectedCurrency).rate;
        const convertedAmount = amount / selectedCurrencyRate;

        setResult({
            amount: amount,
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
                    body={
                        <Select
                            selectedCurrency={selectedCurrency}
                            setSelectedCurrency={setSelectedCurrency}
                        />
                    }
                />

                <Paragraph
                    labelContent="Wpisz kwotę w PLN :"
                    body={
                        <input
                            className="form__input"
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            step="0.1"
                            min="1"
                            required
                        />
                    }
                />

                <Result result={result} />

                <Button calculateResult={calculateResult} />

                <Info info="*Kursy walut są z dnia 17.08.2023 ze strony NBP.*" />
            </fieldset>
        </form>
    )
};

export default Form;