import "./style.css";

const Paragraph = ({ labelContent, body }) => (
    <p className="form__paragraph">
        <label className="form__label">{labelContent}</label>
        {body}
    </p>
);

export default Paragraph;