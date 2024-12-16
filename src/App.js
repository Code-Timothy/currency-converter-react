import { useState, useEffect } from "react";
import { StyledContainer } from "./styled";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [ratesData, setRatesData] = useState({
    rates: null,
    date: null,
    status: "loading"
  });
  const [result, setResult] = useState();

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://gist.githubusercontent.com/Code-Timothy/5b66b0529ce7b2de9374a373b27bba7e/raw/1a68a39879785d0004003f0286d358aceb872b0e/currencies.json"
          );

          if (!response.ok) {
            throw new Error(response.statusText);
          }

          const data = await response.json();

          setRatesData({
            rates: data.data,
            date: data.meta.last_updated_at,
            status: "success",
          });
        } catch (error) {
          setRatesData({
            status: "error",
          });
        }
      };

      fetchData();
    }, 3000);
  }, []);

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
      <Form result={result} ratesData={ratesData} calculateResult={calculateResult} />
      <Footer disclaimer="Exchange rates come from the European Central Bank website" />
    </StyledContainer>
  );
}

export default App;
