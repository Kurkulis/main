import { useState } from 'react';

function Skaitiklis({ pradinisSkaicius }) {
    // Inicializuojame state su pradine reikšme, perduota per props
    const [skaicius, setSkaicius] = useState(pradinisSkaicius);

    // Event handler funkcija, kuri didina skaičių
    const padidinti = () => {
        setSkaicius(skaicius + 1);
    };

    return (
        <div>
            <p>Paspaudimų skaičius: {skaicius}</p>
            <button onClick={padidinti}>Padidinti</button>
        </div>
    );
}

export default Skaitiklis;