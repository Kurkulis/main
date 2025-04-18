import { useState } from "react";
import ImoneIvedimas from "./ImoneIvedimas";
import ImoneSpausdinimas from "./ImoneSpausdinimas";



const ImoneBendras = () => {


    const [darbuotojuSarasas, setDarbuotojuSarasas] = useState([
        { name: "Haris", surname: "Poteris", job: "janitor", salary: 2000 },
        { name: "Hariss", surname: "Poteriss", job: "janitors", salary: 2222 }
    ]);

    const pridedamDarbuotoja = (naujasDarbuotojas) => {
        setDarbuotojuSarasas((prev) => [...prev, naujasDarbuotojas])
    }

    const isvalytiDaruotojus = () => {
        setDarbuotojuSarasas([]);
    };


    return (
        <div>
            <h2>Knygų sąrašas</h2>
            <ImoneIvedimas pridetiDarbuotoja={pridedamDarbuotoja} />
            <ImoneSpausdinimas darbuotojuSarasas={darbuotojuSarasas} />
            {darbuotojuSarasas.length > 0 && (
                <button onClick={isvalytiDaruotojus}>Išvalyti sąrašą</button>
            )}
        </div>
    );
};

export default ImoneBendras;
