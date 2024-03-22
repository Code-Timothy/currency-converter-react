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

  const selectedCurrencyRate = currencies.find(currency => currency.short === selectedCurrency).rate;

  const calculateResult = () => {
    const newResult = amount / selectedCurrencyRate;
    setResult(newResult);
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
            />
          }
          extraSectionContent={<Button />}
        />
        <Section
          title="Result"
          extraClassName="section--white"
          body={
            <Result
              result={result}
              amount={amount}
              selectedCurrency={selectedCurrency}
            />
          }
          extraSectionContent={<Info />}
        />
      </main>
    </Container>
  );
}

export default App;
