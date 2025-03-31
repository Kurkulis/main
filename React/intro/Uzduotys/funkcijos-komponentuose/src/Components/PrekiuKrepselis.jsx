const PrekiuKrepselis = () => {

    const prekiuKrepselis = [
        {
            id: 1,
            pavadinimas: "Nešiojamas kompiuteris",
            kaina: 1200,
            kiekis: 1,
            nuolaida: 10 // procentais
        },
        {
            id: 2,
            pavadinimas: "Belaidės ausinės",
            kaina: 80,
            kiekis: 2,
            nuolaida: 5
        },
        {
            id: 3,
            pavadinimas: "Pelė",
            kaina: 25,
            kiekis: 1,
            nuolaida: 1
        }
    ];

    const spausdinam = ({ preke }) => {
        return (
            <div key={preke.id}>
                <p>id -{preke.id}</p>
                <p>pavadinimas - {preke.pavadinimas}</p>
                <p>kaina - {preke.kaina} €</p>
                <p>kiekis - {preke.kiekis}</p>
                <p>nuolaida - {preke.nuolaida} %</p>
                <hr></hr>
            </div>
        )
    };

    const kainaSuNuolaida = (produktas) => {
        return produktas.reduce((suma, preke) => {
            const nuolaidaVienam = preke.kaina * (preke.nuolaida / 100);
            return suma + nuolaidaVienam * preke.kiekis;
        }, 0);
    }

    const bendraKaina = (preke) => {
        return preke.reduce((suma, preke) => {
            const KainaSuNuolaida = preke.kaina * (1 - preke.nuolaida / 100);
            return suma + KainaSuNuolaida * preke.kiekis;
        }, 0);
    }

    const atrinktiPagalKaina = (riba) => {
        return prekes.filter(preke => preke.kaina > riba);
    };

    return (
        <div>
            {prekiuKrepselis.map((preke) => spausdinam({ preke }))}
            <p>bendra sutaupyta suma: {kainaSuNuolaida(prekiuKrepselis)}</p>
            <p>bendra isleista suma: {bendraKaina(prekiuKrepselis)}</p>
        </div>
    )
}

export default PrekiuKrepselis

