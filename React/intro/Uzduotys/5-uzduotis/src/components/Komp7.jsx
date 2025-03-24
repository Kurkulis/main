// TODO: prijunkite šį komponentą prie App.jsx

const Komp7 = () => {
    let straipsniai = [
        {
            id: 1,
            pavadinimas: 'Pirmas straipsnis',
            tekstas: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
        {
            id: 2,
            pavadinimas: 'Antras straipsnis',
            tekstas: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
        {
            id: 3,
            pavadinimas: 'Trečias straipsnis',
            tekstas: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        },
    ];

    return (
        // TODO: atvaizduokite visus straipsnius,
        // visus atkartodami div'e su klase 'straipsnis',
        // įsistatykite atitinkamose jo vietose straipsnio
        // pavadinimą ir tekstą

        <div>
            <h3>Komp7</h3>
            <h4>Straipsniai</h4>

            {straipsniai.map((strp, i) => (
                <div className="straipsnis" key={i}>
                    <h4>{strp.pavadinimas}</h4>
                    <p>{strp.tekstas}</p>
                </div>
            ))}

        </div>
    )
}

export default Komp7
