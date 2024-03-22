import "./style.css";

const Button = ({ onFormSubmit }) => (
    <div className="button">
        <button className="button__button" onClick={onFormSubmit}>Przelicz</button>
    </div>
);

export default Button;