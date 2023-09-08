import { useState, useEffect } from "react";
import { useCurrencyRates } from "./useCurrencyRates";
import {
    StyledParagraph,
    StyledSpan,
    StyledButton,
    StyledInput
} from "./styled";
import Paragraph from "./Paragraph/index";
import Select from "./Select/index";
import Result from "./Result/index";
import Tile from "./Tile/index";

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
                <Tile
                    title="ładowanie..."
                    body={(
                        <StyledParagraph>
                            Sekundka...<br></br>
                            Ładuje kursy walut z Europejskiego Banku Centralnego... 🔨
                        </StyledParagraph>
                    )}
                />
            )
        case "success":
            return (
                <Tile
                    shouldOnFormSubmit={true}
                    calculateResult={calculateResult}
                    title="Kalkulator walut"
                    body={(
                        <>
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

                            <StyledParagraph info="true">
                                Kursy walut pobierane są z Europejskiego Banku Centralnego.<br></br>
                                Aktualne na dzień: <StyledSpan>{ratesData.date}</StyledSpan>
                            </StyledParagraph>
                        </>
                    )}
                />
            )
        default:
            return (
                <Tile
                    title="Błąd..."
                    body={(
                        <StyledParagraph error="true">
                            Hmm...<br></br>
                            Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem.<br></br>
                            Jeśli masz... to wygląda na to, ze to nasza wina. Spróbuj później... 😢
                        </StyledParagraph>
                    )}
                />
            )
    };
};

export default Form;