import { useState } from "react";
import { useCurrencyRates } from "./useCurrencyRates";
import { StyledContainer } from "./styled";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [result, setResult] = useState();
  const ratesData = useCurrencyRates();

  const formatDate = (date) => {
    const currentDate = new Date(date);

    return (
      currentDate.toLocaleDateString("en-EN", {
        year: "numeric",
        day: "numeric",
        month: "numeric",
      })
    );
  };

  const calculateResult = (amount, selectedCurrency) => {
    const rate = ratesData.rates[selectedCurrency].value;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency: selectedCurrency,
    });
  };

  return (
    <StyledContainer>
      <Header title="RateMate Calc" />
      <Form
        result={result}
        ratesData={ratesData}
        calculateResult={calculateResult}
      />
      <Footer
        disclaimer="Exchange rates come from the various financial institutions"
        date={ratesData.status === "success" ? formatDate(ratesData.date) : ""}
      />
    </StyledContainer>
  );
}

export default App;
