import { useRef, useState } from "react";

const Skaiciokas = () => {
    const inputRef = useRef();
    const [skaicius, setSkaicius] = useState("");

    const rodytiSkaiciu = () => {
        const ivestaReiksme = inputRef.current.value;
        setSkaicius(ivestaReiksme);
    };

    const arTeig = () => {
        if (skaicius === "") {
            return "";
        }

        if (skaicius % 2 === 0) {
            return "lyginis "
        } else {
            return "nelyginis"
        }
    }

    const nulinam = () => {
        setSkaicius("");
        rodytiSkaiciu(ivestaReiksme);
    }

    return (
        <div>
            <h2>Skaicius</h2>

            <input type="number" ref={inputRef} />

            <button onClick={rodytiSkaiciu}>Rodyti</button>
            <button onClick={nulinam}>Nunulinti</button>
            <p>{skaicius}</p>
            <p>{arTeig()}</p>
        </div>
    );
};

export default Skaiciokas;
