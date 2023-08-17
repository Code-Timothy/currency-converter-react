import "./style.css";

const Result = ({ result }) => (
    <p className="form__paragraph">
        {result.toAmount !== 0 && (
            <span> {result.fromAmount} PLN = {result.toAmount.toFixed(2)} {result.currency}</span>
        )}
    </p>
);

export default Result;