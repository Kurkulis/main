import { useState } from "react";

const TrysKepyklos = () => {

    const [uzsakymai, setUzsakymai] = useState(0);
    const [kepykla1, setKepykla1] = useState(0);
    const [kepykla2, setKepykla2] = useState(0);
    const [kepykla3, setKepykla3] = useState(0);


    const handlerUzsakymai = (e) => {
        const ivestis = e.target.value;
        const skaicius = +ivestis;
        setUzsakymai(skaicius);
    }

    const handlerKepykla1 = (e) => { setKepykla1(+e.target.value); }
    const handlerKepykla2 = (e) => { setKepykla2(+e.target.value); }
    const handlerKepykla3 = (e) => { setKepykla3(+e.target.value); }

    let galia = kepykla1 + kepykla2 + kepykla3;

    const pajegumas = () => {
        if (galia >= uzsakymai) {
            return 'pajegumo uztanka'
        } else {
            return `pajegumo neuztenka, truksta ${uzsakymai - galia}`
        }
    }

    return (
        <div>
            <h2>TrysKepyklos</h2>
            <label>uzsakymu kiekis </label>
            <input type="number" onChange={handlerUzsakymai} />

            <br />
            <label>1 kepyklos pajegumas </label>
            <input type="number" onChange={handlerKepykla1} />
            <br />
            <label>2 kepyklos pajegumas  </label>
            <input type="number" onChange={handlerKepykla2} />
            <br />
            <label>3 kepyklos pajegumas  </label>
            <input type="number" onChange={handlerKepykla3} />

            <p>{pajegumas()}, reikia {uzsakymai}, galim pagaminti {galia}</p>
        </div>
    );
};


export default TrysKepyklos;
