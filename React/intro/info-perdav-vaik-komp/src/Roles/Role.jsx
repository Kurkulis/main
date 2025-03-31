
const Role = ({ pavadinimas, kiekis }) => {


    const arDaug = (kiekis) => {
        if (kiekis >= 20) {
            return '>=20';
        } else {
            return '<20';
        }
    };


    return (
        <div>
            <h3>Roles pavadinimas - {pavadinimas}</h3>
            <h4>vartotoju kiekis - {kiekis}</h4>
            <p>{arDaug(kiekis)}</p>
        </div>
    );
};

export default Role;