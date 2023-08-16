import { currencies } from "../currencies";
import "./style.css";

const Select = () => {
    return (
        <select className="form__input" id="currencySelect">
            {currencies.map((currency) => (
                <option value={currency.short}>
                    {currency.name}
                </option>
            ))}
        </select>
    )
};

export default Select;