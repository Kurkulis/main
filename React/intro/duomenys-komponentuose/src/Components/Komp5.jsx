const Komp5 = () => {
    let automobiliai = ['audi', 'bmw', 'volvo', 'subaru', 'VW', 'mazda']

    let tilte = 'Mano masinos'

    return (
        <div>
            <h1>komp5</h1>
            <h3>{tilte}:</h3>
            <ul>
                {automobiliai.map((automobilis, index) => <li key={index}>{automobilis}</li>)}
            </ul>
        </div>
    )
};

export default Komp5;