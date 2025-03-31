
const Automobilis = ({ automobilis }) => {

    return (
        <div>
            <h2>{automobilis.marke} {automobilis.modelis}</h2>
            <p>Metai: {automobilis.metai}</p>
            <p>Rida: {automobilis.rida} km</p>
            <p>Kaina: {automobilis.kaina} €</p>
        </div>
    );
};

export default Automobilis;