import { useCurrentDate } from "./useCurrentDate";
import { StyledClock } from "./styled";

const formatDate = (date) => (
    date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    })
);

const Clock = () => {
    const date = useCurrentDate();

    return (
        <StyledClock>
            <span>
                Dzisiaj jest {formatDate(date)}
            </span>
        </StyledClock>
    )
};

export default Clock;