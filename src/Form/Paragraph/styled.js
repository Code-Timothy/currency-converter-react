import styled from "styled-components";

export const StyledParagraph = styled.p`
    margin: 35px 45px;
    text-align: center;

    @media(max-width: 598px){
        margin: 35px 10px;
        font-size: 14px;
    }
`;

export const StyledLabel = styled.label`
    display: inline-block;
    width: 225px;
    text-align: left;
`;