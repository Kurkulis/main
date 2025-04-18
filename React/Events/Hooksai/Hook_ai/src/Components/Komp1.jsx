import { useState } from "react";

const komp1 = () => {

    let [skaicius, setSkaicius] = useState(0);

    const didinti = () => {
        setSkaicius(skaicius + 1);
    };

    const mazinti = () => {
        setSkaicius(skaicius - 1);
    };

    return (
        <div>
            <h2>komp1</h2>
            <h3>counter</h3>
            <button onClick={didinti}>didinti</button>
            <button onClick={mazinti}>mazinti</button>
            <p>daar yra: {skaicius}</p>
        </div>
    );
};


export default komp1;
