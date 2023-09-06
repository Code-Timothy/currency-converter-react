import { StyledSelect } from "./styled";

const Select = ({ selectedCurrency, setSelectedCurrency, ratesData }) => (
    <StyledSelect
        value={selectedCurrency}
        onChange={({ target }) => setSelectedCurrency(target.value)}
    >
        {Object.keys(ratesData.rates).map((currency) => (
            <option key={currency} value={currency}>
                {currency}
            </option>
        ))}
    </StyledSelect>
);

export default Select;