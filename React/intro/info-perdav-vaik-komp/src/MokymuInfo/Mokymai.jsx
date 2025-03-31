import Modulis from './Modulis';

const Mokymai = () => {
    const moduliai = [
        { pavadinimas: "HTML", trukme: 3 },
        { pavadinimas: "CSS", trukme: 4 },
        { pavadinimas: "React", trukme: 6 },
    ];

    return (
        <div>
            <h2>Mokymų moduliai</h2>
            {moduliai.map((m, index) => (<Modulis key={index} {...m} />))}
        </div>
    );
};

export default Mokymai;
