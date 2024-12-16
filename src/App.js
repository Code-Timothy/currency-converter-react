import { useState, useEffect } from "react";
import { StyledContainer } from "./styled";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [currencies, setCurrencies] = useState(null);
  const [result, setResult] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://gist.githubusercontent.com/Code-Timothy/5b66b0529ce7b2de9374a373b27bba7e/raw/1a68a39879785d0004003f0286d358aceb872b0e/currencies.json");

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const currencies = await response.json();
        setCurrencies(currencies.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const calculateResult = (amount, currency) => {
    // const rate = currencies.find(({ short }) => short === currency).rate;
    // setResult({
    //   sourceAmount: +amount,
    //   targetAmount: amount / rate,
    //   currency,
    // });
  };

  return (
    <StyledContainer>
      <Header title="RateMate Calc" />
      <Form result={result} calculateResult={calculateResult} />
      <Footer disclaimer="Exchange rates come from the European Central Bank website" />
    </StyledContainer>
  );
}

export default App;
