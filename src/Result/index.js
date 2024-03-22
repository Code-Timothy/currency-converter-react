import "./style.css";

const Result = ({ result, amount, selectedCurrency }) => (
    <div className="result">
        <p className="result__title">{amount} PLN = {result.toFixed(2)} {selectedCurrency}</p>
    </div>
);

export default Result;