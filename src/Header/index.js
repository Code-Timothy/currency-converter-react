import { StyledHeader, Title, LogoContainer, Logo } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <Title>{title}</Title>
        <LogoContainer>
            <Logo />
            <span>{title}</span>
        </LogoContainer>
    </StyledHeader>
);

export default Header;