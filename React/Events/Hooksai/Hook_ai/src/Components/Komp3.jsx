import { useState } from "react";

const komp3 = () => {

    let [skaicius, setSkaicius] = useState(0);

    const onClickButtonAction = (value) => {
        if (value === 0) {
            setSkaicius(0)
        } else {
            setSkaicius(skaicius + value);
        }
    }


    return (
        <div>
            <h2>komp3</h2>
            <h3>skaiciu keitinejimas</h3>
            <button onClick={() => onClickButtonAction(1)}>didinti vienu</button>
            <button onClick={() => onClickButtonAction(-1)}>mazinti vienu</button>
            <button onClick={() => onClickButtonAction(5)}>didinti penkiais</button>
            <button onClick={() => onClickButtonAction(-5)}>mazinti penkiais</button>
            <button onClick={() => onClickButtonAction(0)}>grazinti 0</button>
            <p>daar yra: {skaicius}</p>
        </div>
    );
};


export default komp3;
