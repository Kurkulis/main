import TekstoVaikas from "./TekstoVaikas";

const TekstoBendras = () => {

    let kintamasis = 'kazkas';

    return (
        <div>
            Teksto dalykai
            <div>
                <TekstoVaikas tekstas='labas' />
                <TekstoVaikas tekstas='123456789' />
                <TekstoVaikas />
                <TekstoVaikas tekstas={kintamasis} />
            </div>
        </div>
    );
};

export default TekstoBendras;