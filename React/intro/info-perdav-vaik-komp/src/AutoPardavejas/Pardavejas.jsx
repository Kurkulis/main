import Automobilis from "./Automobilis";


const Pardavejas = () => {

    const automobilis = {
        marke: "Toyota",
        modelis: "Corolla",
        metai: 2015,
        rida: 150000,
        kaina: 5500
    };


    return (
        <div>
            <Automobilis automobilis={automobilis} />
        </div>
    );
};

export default Pardavejas;