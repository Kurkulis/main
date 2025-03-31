const Naujiena = ({ duomenys }) => {

    const arHot = duomenys.perziuros >= 1000;

    return (
        <div>
            <h3>
                {duomenys.pavadinimas} {arHot && <span> HOT</span>}
            </h3>
            <p>Peržiūros: {duomenys.perziuros}</p>
            <p>{duomenys.tekstas}</p>
        </div>
    );
};

export default Naujiena;
