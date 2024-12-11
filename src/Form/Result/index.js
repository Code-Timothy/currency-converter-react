import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        {!!result && (
            <strong>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>)}
    </p>
);

export default Result;