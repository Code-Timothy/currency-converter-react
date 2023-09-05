import { useState, useEffect } from "react";
import { currencies } from "./currencies";
import { StyledForm, StyledFieldset, StyledLegend, StyledParagraph, StyledButton, StyledInput } from "./styled";
import Clock from "./Clock/index";
import Paragraph from "./Paragraph/index";
import Select from "./Select/index";
import Result from "./Result/index";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].short);
    const [result, setResult] = useState();

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest/base=PLN");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const currencies = await response.json();
                console.log(currencies);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        const selectedCurrencyRate = currencies.find((currency) => currency.short === selectedCurrency).rate;
        const convertedAmount = amount / selectedCurrencyRate;

        setResult({
            fromAmount: +amount,
            currency: selectedCurrency,
            toAmount: convertedAmount,
        });
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                <StyledLegend>Kalkulator walut</StyledLegend>

                <Clock />

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
                        <StyledInput
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

                <StyledParagraph>
                    <StyledButton>Przelicz</StyledButton>
                </StyledParagraph>

                <StyledParagraph info>
                    *Kursy walut są z dnia 17.08.2023 ze strony NBP.*
                </StyledParagraph>
            </StyledFieldset>
        </StyledForm>
    )
};

export default Form;