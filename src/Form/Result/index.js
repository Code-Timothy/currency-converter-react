import { StyledParagraph } from "./styled";

const Result = ({ result }) => (
    <StyledParagraph>
        {!!result && (
            <span> {result.fromAmount} PLN = {result.toAmount.toFixed(2)} {result.currency}</span>
        )}
    </StyledParagraph>
);

export default Result;