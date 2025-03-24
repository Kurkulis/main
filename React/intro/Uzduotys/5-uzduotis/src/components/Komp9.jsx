// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {

    const kursai = [
        {
            pavadinimas: "JavaScript Pagrindai",
            trukme: "6 savaitės",
            kaina: 299
        },
        {
            pavadinimas: "React JS Gylus Mokymasis",
            trukme: "8 savaitės",
            kaina: 399
        },
        {
            pavadinimas: "Python Duomenų Analitika",
            trukme: "10 savaičių",
            kaina: 499
        }
    ];

    return (
        <div>
            <h3>Komp9</h3>
            {kursai.map((kursas, i) => (
                <div key={i}>
                    <p>{kursas.pavadinimas}</p>
                    <p>trukme - {kursas.trukme}</p>
                    <p>kain - {kursas.kaina}e</p>
                </div>
            ))}
        </div>
    )
}

export default Komp9
