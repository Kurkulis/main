import { useRef, useState } from "react";

const Kelione = () => {
    const kilometraiRef = useRef();
    const sanaudosRef = useRef();
    const kainaRef = useRef();

    const [kilometrai, setKilometrai] = useState("");
    const [sanaudos, setSanaudos] = useState("");
    const [kaina, setKaina] = useState("");
    const [rodom, setRodom] = useState(false);

    const rodyti = () => {
        const kiloReik = +kilometraiRef.current.value;
        const sanaudReik = +sanaudosRef.current.value;
        const kainaReik = +kainaRef.current.value;
        setKilometrai(kiloReik);
        setSanaudos(sanaudReik);
        setKaina(kainaReik);
        setRodom(true);

        if (kiloReik && sanaudReik && kainaReik) {
            kilometraiRef.current.value = "";
            sanaudosRef.current.value = "";
            kainaRef.current.value = "";
        };
    }

    const kuroSanaudos = () => {
        return (kilometrai / 100) * sanaudos;
    }

    const kuroKaina = () => {
        return kuroSanaudos() * kaina;;
    }


    return (
        <div>
            <h2>Kelione</h2>

            <input type="number" ref={kilometraiRef} placeholder="kilometrai" />
            <input type="number" ref={sanaudosRef} placeholder="vidutines sanaudos" />
            <input type="number" ref={kainaRef} placeholder="1l kuro kaina" />


            <button onClick={rodyti}>Rodyti</button>
            {rodom && (
                <>
                    <p>km - {kilometrai}</p>
                    <p>l/100km - {sanaudos}</p>
                    <p>kaina -{kaina}</p>
                    <p>kiek suvalge kuro - {kuroSanaudos()}</p>
                    <p>kiek kainavo kuras - {kuroKaina()}</p>
                </>
            )}
        </div>
    );
};

export default Kelione;
