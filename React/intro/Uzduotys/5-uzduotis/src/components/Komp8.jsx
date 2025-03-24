// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {

    const salys = [
        {
            pavadinimas: "Lietuva",
            sostine: "Vilnius",
            gyventojuSkaicius: 2800000
        },
        {
            pavadinimas: "Latvija",
            sostine: "Ryga",
            gyventojuSkaicius: 1900000
        },
        {
            pavadinimas: "Estija",
            sostine: "Talinas",
            gyventojuSkaicius: 1300000
        }
    ];


    return (
        <div>
            <h3>Komp8</h3>
            {salys.map((salis, i) => (
                <div key={i}>
                    <p>{salis.pavadinimas}</p>
                    <p>sostine - {salis.sostine}</p>
                    <p>gyventou skaicius - {salis.gyventojuSkaicius}</p>
                </div>
            ))}
        </div>
    )
}

export default Komp8
