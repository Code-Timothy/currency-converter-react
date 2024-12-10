import "./style.css";

const Footer = ({ disclaimer }) => (
    <footer className="footer">
        <p className="footer__paragraph">**** **** **** 1234</p>
        <p className="footer__paragraph footer__paragraph--smaller">
            {disclaimer}
        </p>
    </footer>
);

export default Footer;