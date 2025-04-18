import { useState } from "react";

const Zodis = () => {

    const [zodis, setZodis] = useState("");

    const keiciamZodi1 = () => {
        setZodis("pomidoras")
    }

    const keiciamZodi2 = () => {
        setZodis("Agurkas")
    }

    return (
        <div>
            <h2>Zodis</h2>

            <button onClick={keiciamZodi1}>zodio pakeitimas 1</button>
            <button onClick={keiciamZodi2}>zodio pakeitimas 2</button>
            <p>zodis - {zodis}</p>

        </div>
    );
};


export default Zodis;
