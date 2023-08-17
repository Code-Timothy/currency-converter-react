import "./style.css";

const Result = ({ result }) => (
    <p className="form__paragraph">
        {result.value !== 0 && (
            <span> {result.amount} PLN = {result.value.toFixed(2)} {result.toCurrency}</span>
        )}
    </p>
);

export default Result;