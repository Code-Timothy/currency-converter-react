import { useCurrentDate } from "./useCurrentDate";

const formatDate = (date) => date.toLocaleString("en-EN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

const Clock = () => {
    const date = useCurrentDate();

    return (
        <span>Today is {formatDate(date)}</span>
    )
};

export default Clock;