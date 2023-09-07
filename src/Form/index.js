import { useState, useEffect } from "react";
import { useCurrencyRates } from "./useCurrencyRates";
import {
    StyledForm,
    StyledFieldset,
    StyledLegend,
    StyledParagraph,
    StyledSpan,
    StyledButton,
    StyledInput
} from "./styled";
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
            const currencyArray = Object.keys(ratesData.rates);

            if (currencyArray.length > 0) {
                setSelectedCurrency(currencyArray[0]);
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

    switch (ratesData.status) {
        case "loading":
            return (
                <StyledForm>
                    <StyledFieldset>
                        <StyledLegend>Ładowanie...</StyledLegend>
                        <Clock />
                        <StyledParagraph>
                            Sekundka...<br></br>
                            Ładuje kursy walut z Europejskiego Banku Centralnego... 🔨
                        </StyledParagraph>
                    </StyledFieldset>
                </StyledForm>
            )
        case "success":
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
                            Kursy walut pobierane są z Europejskiego Banku Centralnego.<br></br>
                            Aktualne na dzień: <StyledSpan>{ratesData.date}</StyledSpan>
                        </StyledParagraph>
                    </StyledFieldset>
                </StyledForm>
            )
        default:
            return (
                <h1>Wystąpił błąd</h1>
            )
    }
};

export default Form;