import "./style.css";

const Button = ({ onSubmit }) => (
    <div className="button">
        <button className="button__button" onClick={onSubmit}>Przelicz</button>
    </div>
);

export default Button;