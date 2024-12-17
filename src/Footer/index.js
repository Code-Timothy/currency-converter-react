import Clock from "./Clock";
import { Paragraph, StyledFooter } from "./styled";

const Footer = ({ disclaimer, date }) => (
    <StyledFooter>
        <Paragraph><Clock /></Paragraph>
        <Paragraph>
            {disclaimer}
            <br />
            <strong>Current as of: {date}</strong>
        </Paragraph>
    </StyledFooter>
);

export default Footer;