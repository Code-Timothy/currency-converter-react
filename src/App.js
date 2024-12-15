import { useState } from "react";
import { currencies } from "./currencies";
import { StyledContainer } from "./styled";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (amount, currency) => {
    const rate = currencies.find(({ short }) => short === currency).rate;
    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    });
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
