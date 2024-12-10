import "./style.css";

const Header = ({ title }) => (
    <header className="header">
        <h1 className="header__header">{title}</h1>
        <div className="header__logoContainer">
            <img className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/640px-Mastercard_2019_logo.svg.png"
                alt="logo" />
            <span>{title}</span>
        </div>
    </header>
);

export default Header;