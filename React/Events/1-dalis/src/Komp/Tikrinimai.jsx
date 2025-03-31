const Tikrinimai = () => {

    const skaicius = Math.floor(Math.random() * 100) + 1;

    const arLyginis = () => {
        alert(skaicius % 2 === 0 ? `${skaicius} yra lyginis` : `${skaicius} yra nelyginis`);
    }

    const arDidelis = () => {
        alert(skaicius > 30 ? `${skaicius} yra didesnis nei 30` : `${skaicius} yra mažesnis arba lygus 30`);
    }

    const arPirminis = (n) => {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    const tikrintiPirmini = () => {
        alert(arPirminis(skaicius) ? `${skaicius} yra pirminis` : `${skaicius} nėra pirminis`);
    };


    return (
        <div>
            <h3>Tikrinimai</h3>
            <h4>Skaičius: {skaicius}</h4>
            <button onClick={arLyginis}>ar lyginis</button>
            <button onClick={arDidelis}>ar lyginis</button>
            <button onClick={tikrintiPirmini}>ar lyginis</button>
        </div>
    );
};

export default Tikrinimai;
