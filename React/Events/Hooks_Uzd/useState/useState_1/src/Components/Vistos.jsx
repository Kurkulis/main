import { useState } from "react";

const Vistos = () => {


    let uzsakymai = 20;
    const [kiausiniai, setKiausiniai] = useState(0);

    const handlerKiaus = (e) => {
        const ivestis = e.target.value;
        const skaicius = +ivestis;
        setKiausiniai(skaicius);
    }

    const arPadaro = () => {
        if (kiausiniai >= uzsakymai) {
            return "uzsakymu kiekis pasiektas"
        } else if (kiausiniai < uzsakymai) {
            return "uzsakymu skaicius nepasiektas"
        }
    }


    return (
        <div>
            <h2>Vistos</h2>
            <input type="number" placeholder="kiek padejo kiausiniu?" onInput={handlerKiaus} />
            <p>{arPadaro()}, turim {kiausiniai} reikia {uzsakymai}</p>
        </div>
    );
};


export default Vistos;
