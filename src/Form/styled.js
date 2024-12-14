import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 20px 0 20px;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 1px;
`;

export const Paragraph = styled.p`
    flex-basis: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 300;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 20px;
    }
`;

export const Text = styled.span`
    margin: 40px 0 40px 0;
    display: inline-block;
    width: 250px;
    font-size: 26px;
    font-weight: 300;
`;

export const Input = styled.input`
    border: 2px solid ${({ theme }) => theme.colors.lightBlue};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    width: 300px;

    &::placeholder{
        padding: 10px 10px 10px 3px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
        opacity: 70%;
    }
`;

export const Option = styled.option`
    background-color: ${({ theme }) => theme.colors.gray};
`;

export const Button = styled.button`
    font-size: 20px;
    border: none;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.gallery};
    background-size: 200% auto;
    background-color: ${({ theme }) => theme.colors.persimmon};
    background-image: linear-gradient(to right, #FF4E50 0%, #F9D423 51%, #FF4E50 100%);
    width: 320px;
    padding: 10px 30px;
    transition: 0.5s;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px){
        font-size: 16px;
        width: 300px;

        &:hover{
            background-position: right center;
            cursor: pointer;
        }
    }
`;