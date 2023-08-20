import { StyledParagraph, StyledLabel } from "./styled";

const Paragraph = ({ labelContent, body }) => (
    <StyledParagraph>
        <StyledLabel>{labelContent}</StyledLabel>
        {body}
    </StyledParagraph>
);

export default Paragraph;