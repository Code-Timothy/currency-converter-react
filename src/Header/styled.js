import styled from "styled-components";
import logo from "../images/logo.png";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 36px;
`;

export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img.attrs({
    src: logo,
    alt: "logo",
})`
    padding: 5px;
    width: 100px;
`;
