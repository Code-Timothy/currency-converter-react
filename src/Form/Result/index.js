import "./style.css";

const Result = ({ result, amount, selectedCurrency }) => (
    <p className="form__paragraph">
        {<span>
            {result === null ? "" : `Za ${amount} PLN dostaniesz ${result.toFixed(2)} ${selectedCurrency}`}
        </span>}
    </p>
);

export default Result;