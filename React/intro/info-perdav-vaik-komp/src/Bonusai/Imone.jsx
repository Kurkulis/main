import Darbuotojas from "./Darbuotojas";


const Imone = () => {

    return (
        <div>
            <Darbuotojas vardas="Jonas" pavarde="Jonaitis" bonusas={150} />
            <Darbuotojas vardas="Aiste" pavarde="Aistyte" bonusas={0} />
            <Darbuotojas vardas="Tomas" pavarde="Tomaitis" bonusas={50} />
        </div>
    );
};

export default Imone;