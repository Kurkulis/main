
const Darbuotojas = ({ vardas, pavarde, bonusas }) => {

    const kiekGavo = (bonusas) => {
        if (bonusas === 0) {
            return "gaila :(";
        } else if (bonusas > 100) {
            return 'nu, jau kažkas geriau.';
        } else {
            return 'bent ant kebabo užmetė'
        }
    };


    return (
        <div>
            <h5>Darbuotojas: {vardas} {pavarde}</h5>
            <p>Kalėdinis bonusas: {bonusas} €</p>
            <p>{kiekGavo(bonusas)}</p>
        </div>
    );
};

export default Darbuotojas;