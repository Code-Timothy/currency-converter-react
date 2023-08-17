import "./style.css";

const Button = ({ calculateResult }) => (
    <p className="form__paragraph">
        <button
            className="form__button"
            onClick={() => calculateResult()}
        >
            Przelicz
        </button>
    </p>
);

export default Button;