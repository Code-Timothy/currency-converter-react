import "./style.css";

const Result = ({ result, amount }) => {
    return (
        <p className="form__paragraph">
            <span> {amount} {result.fromCurrency} = {result.value.toFixed(2)} {result.toCurrency}</span>
        </p>
    )
};

export default Result;