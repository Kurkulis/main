import Preke from "./Preke";

const Parduotuve = () => {

    let preke = [
        { id: 1, pavadinimas: 'anannasas', kaina: 10, kiekis: 100 },
        { id: 2, pavadinimas: 'kokosas', kaina: 1, kiekis: 1000 },
        { id: 3, pavadinimas: 'mandarinas', kaina: 5, kiekis: 10 },
    ]

    return (
        <div>
            <h1>Parduotuve</h1>

            {
                preke.map((item) => <Preke
                    key={item.id}
                    pavadinimas={item.pavadinimas}
                    kaina={item.kaina}
                    kiekis={item.kiekis} />
                )
            }
        </div>
    );
};

export default Parduotuve;