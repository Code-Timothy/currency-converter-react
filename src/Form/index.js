import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="Podaj kwotę w PLN" />
        <select className="form__select">
            <option>EUR</option>
            <option>USD</option>
            <option>CHF</option>
        </select>
    </form>
);

export default Form;