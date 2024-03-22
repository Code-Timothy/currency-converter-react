import "./style.css";

const Result = ({ result }) => (
    <div className="result">
        <p className="result__title">
            {result !== 0 && `${result.amount} ${result.fromCurrency} = ${result.result} ${result.toCurrency}`}
        </p>
    </div>
);

export default Result;