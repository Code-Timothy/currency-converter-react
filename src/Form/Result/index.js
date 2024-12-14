import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <StyledResult>
        {!!result && (
            <strong>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </strong>)}
    </StyledResult>
);

export default Result;