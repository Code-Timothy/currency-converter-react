import "./style.css";

const Section = ({ title, body, extraClassName, extraSectionContent, additionalHeaderContent }) => (
    <section className={`section ${extraClassName}`}>
        <header className="section__header">
            {additionalHeaderContent}
            <h2 className="section__header-title">{title}</h2>
        </header>
        <div className="section__body">
            {body}
        </div>
        {extraSectionContent}
    </section>
);

export default Section;