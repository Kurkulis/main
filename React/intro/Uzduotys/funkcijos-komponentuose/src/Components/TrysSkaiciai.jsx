
const TrysSkaiciai = () => {

    let masyvas = [10, 2, 3];

    const isvedimas = (skc) => {
        return skc.join(',');
    }

    const didziausias = (skc) => {
        return Math.max(...skc);
    }

    const bendraSuma = (skc) => {
        return skc.reduce((suma, kitas) => suma + kitas, 0);
    }


    return (
        <div>
            <p>{isvedimas(masyvas)}</p>
            <p>didziausias skaicius masyve - {didziausias(masyvas)}</p>
            <p>bendra suma - {bendraSuma(masyvas)}</p>
        </div>
    )
}

export default TrysSkaiciai
