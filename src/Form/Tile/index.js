import Clock from "./Clock/index";
import { StyledForm, StyledFieldset, StyledLegend } from "./styled";

const Tile = ({ title, body, shouldOnFormSubmit, calculateResult }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
    };

    return (
        <StyledForm onSubmit={shouldOnFormSubmit ? onFormSubmit : null}>
            <StyledFieldset>
                <StyledLegend>{title}</StyledLegend>
                <Clock />
                {body}
            </StyledFieldset>
        </StyledForm>
    );
};

export default Tile;