const Sansas = () => {



    const tikrinam = () => {

        const skaicius = Math.floor(Math.random() * 10) + 1;
        console.log("Generuotas skaičius:", skaicius);

        if (skaicius >= 5) {
            return alert('laimejai')
        } else {
            return alert('nelaimejai')
        }
    }

    return (
        <div>
            <h3>Sansas</h3>
            <button onClick={tikrinam}>mygtukas</button>
        </div>
    );
};

export default Sansas;
