import { useState } from "react";

const GreicioMatuoklis = () => {

    const [greitis, setGreitis] = useState(0);

    const komentaras = () => {

        if (greitis === 0) { return "stovi" }
        else if (greitis === 10) { return "sliauzi" }
        else if (greitis === 20) { return "riedi" }
        else if (greitis === 30) { return "judi" }
        else if (greitis === 80) { return "leki" }
    }

    return (
        <div>
            <h2>Greicio Matuoklis</h2>

            <button onClick={() => setGreitis(0)}>0</button>
            <button onClick={() => setGreitis(10)}>10</button>
            <button onClick={() => setGreitis(20)}>20</button>
            <button onClick={() => setGreitis(30)}>30</button>
            <button onClick={() => setGreitis(80)}>80</button>
            <p>Greitis - {greitis}</p>
            <p>{komentaras()}</p>
        </div>
    );
};


export default GreicioMatuoklis;
