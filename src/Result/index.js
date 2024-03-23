import "./style.css";

const Result = ({ result }) => (
    <div className="result">
        <p className="result__title">
            {result !== 0 &&
                `${result.amount.toFixed(2)} ${result.fromCurrency} = ${result.result.toFixed(2)} ${result.toCurrency}`
            }
        </p>
    </div>
);

export default Result;