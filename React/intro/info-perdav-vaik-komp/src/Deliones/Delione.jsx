
const Delione = ({ info }) => {

    const arSunku = (kiekis) => {
        if (kiekis <= 500) {
            return "Lengva";
        } else if (kiekis > 500 && kiekis < 1000) {
            return 'vidutine.';
        } else {
            return 'sunku'
        }
    };


    return (
        <div>
            <h3>{info.pavadinimas}</h3>
            <p>Detalių kiekis: {info.kiekis}</p>
            <p>Išmatavimai: {info.plotis} cm x {info.aukstis} cm</p>
            <p>Sunkumo lygis: {arSunku(info.kiekis)}</p>
        </div>
    );
};

export default Delione;