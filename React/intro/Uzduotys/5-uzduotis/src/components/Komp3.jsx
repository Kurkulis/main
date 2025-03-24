// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
    let preke = {
        pavadinimas: 'Šokoladas',
        kaina: 2.5,
        kiekis: 10,
    };

    return (
        // TODO: į šio komponento div įstatykite
        // prekės pavadinimą, kainą ir kiekį
        <div>
            <h3>Komp3</h3>
            <p>pavadinimas - {preke.pavadinimas}, kaina - {preke.kaina}, kiekis - {preke.kiekis} </p>
        </div>
    )
}

export default Komp3
