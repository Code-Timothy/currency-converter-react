import styled, { css } from "styled-components";

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

export const StyledInput = styled.input`
    width: 225px;
    padding: 5px;
`;

export const StyledParagraph = styled.p`
    margin: 35px 45px;
    text-align: center;

    ${({ info }) => info && css`
        font-size: 14px;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
        color: ${({ theme }) => theme.colors.doveGray};
    `}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 12px;
    }
`;

export const StyledSpan = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary}
`;

export const StyledButton = styled.button`
    padding: 10px 25px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: none;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: hsl(154, 31%, 47%);
    }
`;