import Pazymys from "./Pazymys";

const Studentas = () => {
    const vardas = "Jonas";
    const pavarde = "Jonaitis";
    const mokykla = "Vilniaus licėjus";
    const programa = "Informatika";

    const pazymiai = [10, 8, 4, 5, 3];

    return (
        <div>
            <h2>Studentė: {vardas} {pavarde}</h2>
            <p>Mokykla: {mokykla}</p>
            <p>Programa: {programa}</p>

            <h3>Pažymiai:</h3>
            {pazymiai.map((paz, i) => (
                <Pazymys key={i} pazymys={paz} />
            ))}
        </div>
    );
};
export default Studentas;