import { currencies } from "../currencies";
import "./style.css";

const Select = ({ selectedCurrency, setSelectedCurrency }) => {
    return (
        <select value={selectedCurrency} onChange={({ target }) => setSelectedCurrency(target.value)}>
            {currencies.map((currency) => (
                <option key={currency.short} value={currency.short}>
                    {currency.name}
                </option>
            ))}
        </select>
    )
};

export default Select;