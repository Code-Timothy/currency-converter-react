import { useState } from "react";
import { currencies } from "./currencies";
import Paragraph from "./Paragraph/index";
import Info from "./Info/index";
import Select from "./Select/index";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("USD");
    const [result, setResult] = useState(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const calculateResult = () => {
        switch (selectedCurrency) {
            case "USD":
                return setResult(() => (amount / currencies[3].rate));
            case "EUR":
                return setResult(() => (amount / currencies[0].rate));
            case "CHF":
                return setResult(() => (amount / currencies[2].rate));
            case "GBP":
                return setResult(() => (amount / currencies[1].rate));
            default:
                return setResult(0);
        }

    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}
        >
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

                <p className="form__paragraph">
                    {<span>
                        {result === null ? "" : `Za ${amount} PLN dostaniesz ${result.toFixed(2)} ${selectedCurrency}`}
                    </span>}
                </p>

                <p className="form__paragraph">
                    <button onClick={() => calculateResult()} className="form__button">Przelicz</button>
                </p>
                <Info info="*Kursy walut są z dnia 08.08.2023 ze strony NBP.*" />
            </fieldset>
        </form>
    )
};

export default Form;