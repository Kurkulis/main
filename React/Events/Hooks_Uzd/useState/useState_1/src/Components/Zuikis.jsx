import { useState } from "react";

const Zuikis = () => {

    const [arPersoko, setArPersoko] = useState(false);

    const sokimas = () => {
        setArPersoko(Math.random() < 0.5)
    }

    const persoko = () => {
        setArPersoko(true)
    }

    return (
        <div>
            <h2>Zuikis</h2>

            <button onClick={sokimas}>mygtuks</button>
            <button onClick={persoko}>mygtuks true</button>
            <p>Ar persoko? - {arPersoko ? "taip" : "ne"}</p>

        </div>
    );
};


export default Zuikis;
