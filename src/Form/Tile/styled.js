import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    margin-top: 150px;
    overflow: hidden;
    font-size: 18px;
`;

export const StyledFieldset = styled.fieldset`
    margin: 0;
    background-color: ${({ theme }) => theme.colors.white};
    border: 4px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    padding: 25px 25px 0 25px;
`;

export const StyledLegend = styled.legend`
    padding: 30px;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
`;