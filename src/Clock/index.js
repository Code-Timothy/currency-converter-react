import { useState, useEffect } from 'react';

const Clock = () => {
    const [clock, setClock] = useState(new Date());
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        const formatDate = (date) => {
            return date.toLocaleString("PL", {
                weekday: "long",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
            });
        };

        setFormattedDate(formatDate(clock));
    }, [clock]);

    return (
        <div>Dzisiaj jest {formattedDate}</div>
    );
};

export default Clock;