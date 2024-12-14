import Clock from "./Clock";
import { Paragraph, StyledFooter } from "./styled";

const Footer = ({ disclaimer }) => (
    <StyledFooter>
        <Paragraph><Clock /></Paragraph>
        <Paragraph>{disclaimer}</Paragraph>
    </StyledFooter>
);

export default Footer;