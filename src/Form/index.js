import { useState, useEffect } from "react";
import { useCurrencyRates } from "./useCurrencyRates";
import { currencies } from "./currencies";
import { StyledForm, StyledFieldset, StyledLegend, StyledParagraph, StyledButton, StyledInput } from "./styled";
import Clock from "./Clock/index";
import Paragraph from "./Paragraph/index";
import Select from "./Select/index";
import Result from "./Result/index";

const Form = () => {
    const ratesData = useCurrencyRates();

    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("");
    const [result, setResult] = useState();

    useEffect(() => {
        if (ratesData.status === "success" && ratesData.rates) {
            const rateKeys = Object.keys(ratesData.rates);

            if (rateKeys.length > 0) {
                setSelectedCurrency(rateKeys[0]);
            }
        }
    }, [ratesData]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    const calculateResult = () => {
        const selectedCurrencyRate = ratesData.rates[selectedCurrency];
        const convertedAmount = amount * selectedCurrencyRate;

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
                            ratesData={ratesData}
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