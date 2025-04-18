import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnygosSpausdinimas from "./KnygosSpausdinimas";



const KnyguBendras = () => {


    const [knyguSarasas, setKnyguSarasas] = useState([
        { name: "Haris Poteris", price: 12.99, year: 2001 },
        { name: "Alchemikas", price: 9.99, year: 1998 }
    ]);

    const pridedamKnyga = (naujaKnyga) => {
        setKnyguSarasas((prev) => [...prev, naujaKnyga])
    }

    const isvalytiKnygas = () => {
        setKnyguSarasas([]);
    };


    return (
        <div>
            <h2>Knygų sąrašas</h2>
            <KnygosSpausdinimas knyguSarasas={knyguSarasas} />
            <KnygosIvedimas pridetiKnyga={pridedamKnyga} />
            {knyguSarasas.length > 0 && (
                <button onClick={isvalytiKnygas}>Išvalyti sąrašą</button>
            )}
        </div>
    );
};

export default KnyguBendras;
