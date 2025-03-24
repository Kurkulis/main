
const Darbuotojas = () => {

    const darbuotojas = {
        vardas: "Jonas",
        profesija: "Programuotojas",
        atlyginimas: 2500,
        etatas: "Pilnas",
        darboStazas: 5
    };


    return (
        <div>
            <p>Vardas - {darbuotojas.vardas}, profesija - {darbuotojas.profesija}</p>
            <p>atlyginimas - {darbuotojas.atlyginimas}, etatas - {darbuotojas.etatas}</p>
            <p>darboStazas - {darbuotojas.darboStazas}</p>
            <br></br>

        </div>
    )
}

export default Darbuotojas
