import styled from "styled-components";

export const StyledClock = styled.p`
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.doveGray};
`;