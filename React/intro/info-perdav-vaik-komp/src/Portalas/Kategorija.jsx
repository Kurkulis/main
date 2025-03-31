import Naujiena from "./Naujiena";

const Kategorija = () => {
    const naujienos = [
        {
            pavadinimas: "Nauja kavinė atsidarė",
            perziuros: 1200,
            tekstas: "Atsidarė nauja vieta senamiestyje..."
        },
        {
            pavadinimas: "Mokyklos atnaujinimai",
            perziuros: 800,
            tekstas: "Nauji pakeitimai ugdymo planuose..."
        },
        {
            pavadinimas: "Sporto pergalė",
            perziuros: 3000,
            tekstas: "Mūsų komanda laimėjo finalą!"
        }
    ];

    return (
        <div>
            <h2>Naujienų kategorija</h2>
            {naujienos.map((n, index) => (<Naujiena key={index} duomenys={n} />))}
        </div>
    );
};

export default Kategorija;
