import styled from "styled-components";

export const StyledContainer = styled.main`
    max-width: 1000px;
    background-color: ${({ theme }) => theme.colors.carulean};
    background: linear-gradient(120deg, #0093E9 0%, #80D0C7 100%);
    padding: 10px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 100px ${({ theme }) => theme.colors.gray};
`;