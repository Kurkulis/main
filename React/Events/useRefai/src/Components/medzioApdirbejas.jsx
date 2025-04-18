import { useRef, useState } from "react";

const medzioApdirbejas = () => {
    const kainaRef = useRef();
    const valandosRef = useRef();
    const uzdarbisRef = useRef();

    const [kaina, setKaina] = useState("");
    const [valandos, setValandos] = useState("");
    const [uzdarbis, setUzdarbis] = useState("");
    const [rodom, setRodom] = useState(false);

    const rodyti = () => {
        const kainosKint = +kainaRef.current.value;
        const valandosKint = +valandosRef.current.value;
        const uzdabisKint = +uzdarbisRef.current.value;
        setKaina(kainosKint);
        setValandos(valandosKint);
        setUzdarbis(uzdabisKint);
        setRodom(true);

        if (kainosKint && valandosKint && uzdabisKint) {
            kainaRef.current.value = "";
            valandosRef.current.value = "";
            uzdarbisRef.current.value = "";
        };
    }

    const islaidos = () => {
        return kaina + (valandos * uzdarbis);
    }
    const produktoKaina = () => {
        return islaidos() * 1.3
    }

    return (
        <div>
            <h2>medzioApdirbejas</h2>
            <input type="number" ref={kainaRef} placeholder="medziagu kaina" />
            <input type="number" ref={valandosRef} placeholder="darbo valandu kiekis" />
            <input type="number" ref={uzdarbisRef} placeholder="valandinis uzdarbis" />
            <button onClick={rodyti}>Rodyti</button>
            {rodom && (
                <>
                    <p>kaina - {kaina}</p>
                    <p>valandu kiekis - {valandos}</p>
                    <p>valandinis uzdarbis - {uzdarbis}</p>
                    <p>savikaina - {islaidos()}</p>
                    <p>produkto kaina - {produktoKaina()}</p>
                </>
            )}
        </div>
    );
};

export default medzioApdirbejas;
