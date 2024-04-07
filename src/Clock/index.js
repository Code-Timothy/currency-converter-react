import { useState, useEffect } from 'react';

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

    return (
        <div>Dzisiaj jest {clock.toString()}</div>
    );
};

export default Clock;