import styled, { css } from "styled-components";

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

    ${({ error }) => error && css`
        color: ${({ theme }) => theme.colors.crimson};
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