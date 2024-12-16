import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    align-items: center;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.white};

    ${({ color }) => color && css`
        color: ${color};
    `}
`; 