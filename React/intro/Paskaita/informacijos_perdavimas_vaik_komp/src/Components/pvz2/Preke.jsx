const Preke = ({ pavadinimas, kiekis, kaina }) => {
    return (
        <div>
            be propsu
            <h3>{pavadinimas}</h3>
            <p>Prekyboje turime: <strong>{kiekis}</strong></p>
            <p>Kaina: {kaina}</p>
        </div>
    );
};

export default Preke;