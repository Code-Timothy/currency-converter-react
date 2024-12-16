import { useState } from "react";
import Result from "./Result";
import Loading from "./Loading";
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
            {ratesData.status === "loading" && <Loading />}
            {ratesData.status === "error" && <div>error</div>}
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