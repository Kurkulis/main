
const Salis = ({ pavadinimas, zemynas }) => {


    const arEuropa = (zemynas) => {
        return zemynas === 'Europa';
    };


    return (
        <div>
            <p>Šalis: {pavadinimas}</p>
            <p>Žemynas: {zemynas}</p>
            {arEuropa(zemynas) && <p>jega</p>}
        </div>
    );
};

export default Salis;