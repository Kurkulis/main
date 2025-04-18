import { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
    const [counter, setCounter] = useState(0);

    const counterButtons = [
        { value: 1, text: '+1' },
        { value: 2, text: '+2' },
        { value: 5, text: '+5' },
    ];

    const keistiCounter = (kiekis) => {
        setCounter(prev => prev + kiekis)
    }

    return (
        <div>
            <p>{counter}</p>
            <CounterMygtukai props={keistiCounter} buttons={counterButtons} />

        </div>
    );
};

export default CounterTev;
