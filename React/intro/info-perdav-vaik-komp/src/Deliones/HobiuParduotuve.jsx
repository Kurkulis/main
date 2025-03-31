import Delione from "./Delione";


const HobiuParduotuve = () => {

    const delione1 = {
        pavadinimas: "Ezeras",
        kiekis: 500,
        plotis: 40,
        aukstis: 30
    };

    const delione2 = {
        pavadinimas: "Kalnas",
        kiekis: 1000,
        plotis: 60,
        aukstis: 45
    };

    const delione3 = {
        pavadinimas: "Miestas",
        kiekis: 750,
        plotis: 50,
        aukstis: 35
    };

    const deliones = [delione1, delione2, delione3];

    return (
        <div>
            {deliones.map((d, index) => (<Delione key={index} info={d} />))}
        </div>
    );
};

export default HobiuParduotuve;