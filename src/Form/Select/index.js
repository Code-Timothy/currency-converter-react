import { currencies } from "../currencies";
import { StyledSelect } from "./styled";

const Select = ({ selectedCurrency, setSelectedCurrency }) => (
    <StyledSelect
        value={selectedCurrency}
        onChange={({ target }) => setSelectedCurrency(target.value)}
    >
        {currencies.map((currency) => (
            <option key={currency.short} value={currency.short}>
                {currency.name}
            </option>
        ))}
    </StyledSelect>
);

export default Select;