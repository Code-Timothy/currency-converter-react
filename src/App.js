import { useState } from "react";
import Container from "./Container";
import Section from "./Section";
import Form from "./Form";
import Button from "./Button";
import Result from "./Result";
import Info from "./Info";
import { currencies } from "./currencies";

function App() {
  const [amount, setAmount] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  };

  const calculateResult = () => {
    const selectedCurrencyRate = currencies.find(({ short }) => short === selectedCurrency).rate;

    setResult({
      amount: +amount,
      fromCurrency: "PLN",
      result: amount / selectedCurrencyRate,
      toCurrency: selectedCurrency,
    });
  };

  return (
    <Container>
      <main className="main">
        <Section
          title="Currency"
          body={
            <Form
              currencies={currencies}
              amount={amount}
              setAmount={setAmount}
              selectedCurrency={selectedCurrency}
              setSelectedCurrency={setSelectedCurrency}
              calculateResult={calculateResult}
              onSubmit={onSubmit}
            />
          }
          extraSectionContent={<Button onSubmit={onSubmit} />}
        />
        <Section
          title="Result"
          extraClassName="section--white"
          body={
            <Result
              result={result}
            />
          }
          extraSectionContent={<Info />}
        />
      </main>
    </Container>
  );
}

export default App;
