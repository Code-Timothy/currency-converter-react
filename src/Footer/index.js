import "./style.css";
import Clock from "./Clock";

const Footer = ({ disclaimer }) => (
    <footer className="footer">
        <p className="footer__paragraph"><Clock /></p>
        <p className="footer__paragraph footer__paragraph--smaller">
            {disclaimer}
        </p>
    </footer>
);

export default Footer;