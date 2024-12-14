import { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import { StyledForm, Paragraph, Text, Input, Option, Button } from "./styled";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <>
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
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                            name="currency"
                        >
                            {currencies.map((currency) =>
                                <Option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </Option>
                            )}
                        </Input>
                    </label>
                </Paragraph>
                <Paragraph>
                    <Button>CONVERTE</Button>
                </Paragraph>
                <Result result={result} />
            </StyledForm>
        </>
    );
};

export default Form;