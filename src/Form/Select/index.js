import "./style.css";

const Select = () => {
    return (
        <select className="form__input" id="currencySelect">
            <option value="USD">Dolar Amerykański</option>
            <option value="EUR">Euro</option>
            <option value="CHF">Frank Szwajcarski</option>
            <option value="GBP">Funt Brytyjski</option>
        </select>
    )
};

export default Select;