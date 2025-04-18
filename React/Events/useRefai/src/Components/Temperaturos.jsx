import { useRef, useState } from "react";

const Temperaturos = () => {
    const inputRef = useRef();
    const [temperaturos, setTemperaturos] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const ivesta = +inputRef.current.value;
        if (!isNaN(ivesta)) {
            setTemperaturos((prev) => [...prev, ivesta]);
            inputRef.current.value = "";
        }
    };
    const vidurkis = () => {
        const suma = temperaturos.reduce((bendras, kitas) => bendras + kitas, 0);
        return (suma / temperaturos.length).toFixed(1);
    }
    const minTemp = () => Math.min(...temperaturos);
    const maxTemp = () => Math.max(...temperaturos);
    const skirtumas = () => maxTemp() - minTemp();

    const trinkLast = () => {
        setTemperaturos((bendras) => bendras.slice(0, -1));
    }


    return (
        <div>
            <h2>Temperaturos</h2>
            <form onSubmit={handleSubmit}>
                <input type="number" ref={inputRef} placeholder="temperatura" />
                <button type="submit">prideti</button>
            </form>
            {temperaturos.length > 0 && (
                <>
                    <ul>
                        {temperaturos.map((t, i) => (
                            <li key={i}>{t} °C</li>
                        ))}
                    </ul>

                    <p>Įvesta temperatūrų: {temperaturos.length}</p>
                    <p>Vidutinė temperatūra: {vidurkis()} °C</p>
                    <p>Mažiausia temperatūra: {minTemp()} °C</p>
                    <p>Didžiausia temperatūra: {maxTemp()} °C</p>
                    <p>Skirtumas tarp didž. ir maž.: {skirtumas()} °C</p>

                    <button onClick={trinkLast}>Ištrinti paskutinę</button>
                </>
            )}

            {temperaturos.length === 0 && <p>Temperatūrų dar nėra įvesta.</p>}
        </div>
    );
};

export default Temperaturos;
