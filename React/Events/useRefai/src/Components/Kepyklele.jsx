import { useRef, useState } from "react";

const Kepyklele = () => {
    const darbuotojaiRef = useRef();
    const pajegumasRef = useRef();
    const valandosRef = useRef();

    const [darbuotojai, setDarbuotojai] = useState("");
    const [pajegumas, setPajegumas] = useState("");
    const [valandos, setValandos] = useState("");

    const [uzsakymas, setUzsakymas] = useState([]);
    const uzsakymasRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ivesta = +uzsakymasRef.current.value;
        if (ivesta) {
            setUzsakymas((prev) => [...prev, ivesta]);
            uzsakymasRef.current.value = "";
        }
    };

    const uzsakSuma = () => {
        return uzsakymas.reduce((bendras, kitas) => bendras + kitas, 0)
    }

    const kepyklosPajegumas = () => {
        return darbuotojai * pajegumas * valandos;
    }

    const arSpes = () => {
        if (kepyklosPajegumas() >= uzsakSuma()) {
            return 'Spes'
        } else {
            return 'nespes'
        }
    }

    const yraVisi = darbuotojai && pajegumas && valandos && uzsakymas.length > 0;

    return (
        <div>
            <h2>Kepyklele</h2>
            <input type="number" ref={darbuotojaiRef} onChange={(e) => setDarbuotojai(+e.target.value)} placeholder="Darbuotoju skaicius" />
            <input type="number" ref={pajegumasRef} onChange={(e) => setPajegumas(+e.target.value)} placeholder="1 darb. pajeg. kiekis per 1h" />
            <input type="number" ref={valandosRef} onChange={(e) => setValandos(+e.target.value)} placeholder="darbo valandu kiekis" />
            <br />
            <input type="number" ref={uzsakymasRef} placeholder="kiek nori uzsisakyti?" />
            <button onClick={handleSubmit}>prideti uzsakyma</button>

            {yraVisi && (
                <>
                    <p>{uzsakSuma()}</p>
                    <p>{kepyklosPajegumas()}</p>
                    <p>{arSpes()}</p>
                </>
            )}

        </div>
    );
};

export default Kepyklele;
