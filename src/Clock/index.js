import { useState, useEffect } from 'react';
import { formatDate } from './formatDate';
import "./style.css";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedDate = formatDate(clock);

    return (
        <div className="section__clock">
            <p className="section__clock--text">
                Dzisiaj jest {formattedDate}
            </p>
        </div>
    );
};

export default Clock;