import { useRef, useState } from "react";

const RefPavyzdys = () => {
    const inputRef = useRef();          // Ref į input lauką
    const [rezultatas, setRezultatas] = useState(""); // Būsena rezultatui parodyti

    const rodytiTeksta = () => {
        const ivestaReiksme = inputRef.current.value; // Gaunam reikšmę iš inputo
        setRezultatas(ivestaReiksme);                 // Išvedam ją
    };

    return (
        <div>
            <h2>useRef Pavyzdys</h2>

            <input type="text" ref={inputRef} placeholder="Įvesk ką nors..." />

            <button onClick={rodytiTeksta}>Rodyti</button>

            <p>Rezultatas: {rezultatas}</p>
        </div>
    );
};

export default RefPavyzdys;
