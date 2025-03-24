const Komp3 = () => {
    let studentas = {
        vardas: 'Jonas',
        pavarde: ' Jonaitis',
        miestas: 'Vilnius',
        adresas: {
            gatve: 'vilniaus g.',
            numeris: 1
        },
        bedarbis: false,
        pazymiai: [10, 9, 8, 7]
    }

    // const arBedarbis = (kintamasis) => {
    //     if (kintamasis) {
    //         return 'taip'
    //     }
    //     return 'ne';
    // };

    const arBedarbis = (bedarbis) => {
        return bedarbis ? 'Taip' : 'Ne';
    }


    return (
        <div>
            <h1>komp3</h1>
            <p>studento vardas - {studentas.vardas}</p>
            <p>studento pavarde - {studentas.pavarde}</p>
            <p>studentas turi darba - {arBedarbis(studentas.bedarbis)}</p>
            <p>kur gyvena - {studentas.miestas}, {studentas.adresas.gatve} {studentas.adresas.numeris}</p>
        </div>
    )
};

export default Komp3;