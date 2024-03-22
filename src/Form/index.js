import "./style.css";

const Form = ({ currencies, amount, setAmount, selectedCurrency, setSelectedCurrency, onFormSubmit }) => (
    <form className="form" onSubmit={onFormSubmit}>
        <input
            className="form__input"
            placeholder="Podaj kwotę w PLN"
            type="number"
            min={1}
            step={0.1}
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
        />
        <select
            className="form__select"
            value={selectedCurrency}
            onChange={({ target }) => setSelectedCurrency(target.value)}
        >
            {currencies.map(currency => (
                <option
                    key={currency.short}
                    value={currency.short}
                >
                    {currency.short}
                </option>
            ))}
        </select>
    </form>
);

export default Form;