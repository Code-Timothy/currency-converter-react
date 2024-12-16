import { Wrapper } from "./styled";

const StatusMessage = ({ message, color }) => (
    <Wrapper color={color}>
        <span>{message}</span>
    </Wrapper>
);

export default StatusMessage;