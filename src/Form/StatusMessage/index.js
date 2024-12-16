import { Wrapper } from "./styled";

const StatusMessage = ({ message }) => (
    <Wrapper>
        <span>{message}</span>
    </Wrapper>
);

export default StatusMessage;