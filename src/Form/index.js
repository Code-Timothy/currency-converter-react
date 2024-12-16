import { useState } from "react";
import Result from "./Result";
import StatusMessage from "./StatusMessage";
import { StyledForm, Paragraph, Text, Input, Option, Button } from "./styled";

const Form = ({ result, ratesData, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [selectedCurrency, setSelectedCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, selectedCurrency);
    };

    return (
        <>
            {ratesData.status === "loading" && <StatusMessage
                message={<>One second...<br />Loading exchange rates from various financial institutions...😎</>}
                color="white"
            />}
            {ratesData.status === "error" && <StatusMessage
                message="Hmm... Something went wrong🤯 Check if you have an internet connection. If you do... it seems like it's our fault. Maybe you could try again later? 🤔"
                color="crimson"
            />}
            {ratesData.status === "success" &&
                <StyledForm
                    onSubmit={onFormSubmit}
                >
                    <Paragraph>
                        <label>
                            <Text>Enter the amount</Text>
                            <Input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                type="number"
                                min="1"
                                step="0.01"
                                placeholder="Enter the amount in PLN"
                                required
                            />
                        </label>
                    </Paragraph>
                    <Paragraph>
                        <label>
                            <Text>Select currency</Text>
                            <Input
                                as="select"
                                value={selectedCurrency}
                                onChange={({ target }) => setSelectedCurrency(target.value)}
                                name="currency"
                            >
                                {Object.keys(ratesData.rates).map(currency => (
                                    <Option key={currency}>
                                        {currency}
                                    </Option>
                                ))}
                            </Input>
                        </label>
                    </Paragraph>
                    <Paragraph>
                        <Button>CONVERTE</Button>
                    </Paragraph>
                    <Result result={result} />
                </StyledForm>
            }
        </>
    );
};

export default Form;