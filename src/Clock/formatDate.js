export const formatDate = (date) => {
    return date.toLocaleString(undefined, {
        weekday: "long",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
};