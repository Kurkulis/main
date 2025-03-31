const EinaPrieLentos = () => {

    let mokiniai = ['Jonas', 'Petras', 'Vilma', 'Jurate', 'Albinas']


    const pasirinktiStudenta = () => {
        const index = Math.floor(Math.random() * mokiniai.length);
        const vardas = mokiniai[index];
        alert(`${vardas} eina prie lentos!`);
    };


    return (
        <div>
            <h3>EinaPrieLentos</h3>
            <button onClick={pasirinktiStudenta}>kas?</button>
        </div>
    );
};

export default EinaPrieLentos;
