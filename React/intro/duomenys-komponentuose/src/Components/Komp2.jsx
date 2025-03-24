const Komp2 = () => {
    let pazymiai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div>
            <h1>komp2</h1>
            <p>{pazymiai.join(',')}</p>
            <p>{pazymiai[2]}</p>
        </div>
    )
};

export default Komp2;