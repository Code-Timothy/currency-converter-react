import "./style.css";

const Form = ({ currencies, amount, setAmount, selectedCurrency, setSelectedCurrency, calculateResult }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                placeholder="Podaj kwotę w PLN"
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
};

export default Form;