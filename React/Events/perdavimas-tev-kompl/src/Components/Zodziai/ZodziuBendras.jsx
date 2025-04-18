import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";


const ZodziuBendras = () => {

    const [ZodziuMasyvas, setZodziuMasyvas] = useState([]);

    const pridetiZodi = (zodis) => {
        setZodziuMasyvas((prev) => [...prev, zodis]);
    };

    const ilgiausiasZodis = () => {
        if (ZodziuMasyvas.length === 0) return "X";

        let didziausias = {
            index: 0,
            ilgis: ZodziuMasyvas[0].length
        }

        for (let i = 1; i < ZodziuMasyvas.length; i++) {
            if (didziausias.ilgis < ZodziuMasyvas[i].length) {
                didziausias = {
                    index: i,
                    ilgis: ZodziuMasyvas[i].length
                };
            }
        }
        return ZodziuMasyvas[didziausias.index]
    };

    return (
        <div>
            <ZodziuIvedimas pridetiZodi={pridetiZodi} />
            <ul>
                {
                    ZodziuMasyvas.length > 0
                        ? ZodziuMasyvas.map((zodis, index) => <li key={index}>{zodis}</li>)
                        : <p>Deja, nėra įvestos informacijos</p>
                }
            </ul>
            {ZodziuMasyvas.length > 0 ? 'ilgiausias zodis - ' + ilgiausiasZodis() : ""}
        </div>
    );
};

export default ZodziuBendras;
