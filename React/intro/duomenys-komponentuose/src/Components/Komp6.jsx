const Komp6 = () => {
    let skaiciai1 = [1, 23, 455, 85, 52, 16];
    let skaiciai2 = [];


    return (
        <div>
            <h1>komp6</h1>
            {skaiciai1.map((skaicius, index) => <li key={index}>{skaicius} - {skaicius % 2 === 0 ? 'teigiamas' : 'neigiamas'}</li>)}
        </div>
    )
};

export default Komp6;








