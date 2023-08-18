import { useState, useEffect } from 'react';

const Clock = () => {
    const date = new Date();
    const [clock, setClock] = useState(date);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const updatedDate = new Date();
            setClock(updatedDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <p>
            <span>Dzisiaj jest {clock.toLocaleString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
            })}
            </span>
        </p>
    )
};

export default Clock;