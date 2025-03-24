// TODO: prijunkite šį komponentą prie App.jsx

const Komp2 = () => {
    let knyga = 'Faustas';
    let autorius = 'Johanas Volfganas Gėtė';

    return (
        // TODO: į čia esančius h1 ir p elementus
        // įstatykite knygos pavadinimą ir autorių
        <div>
            <h3>Komp2</h3>
            <h4>knygos pavadinimas: {knyga}</h4>
            <p>Ją parašė: {autorius}</p>
        </div>
    )
}

export default Komp2
