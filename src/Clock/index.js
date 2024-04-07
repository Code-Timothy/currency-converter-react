import { useState, useEffect } from 'react';
import "./style.css";

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
            return date.toLocaleString(undefined, {
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
        <div className="section__clock">
            <p className="section__clock--text">
                Dzisiaj jest {formattedDate}
            </p>
        </div>
    );
};

export default Clock;