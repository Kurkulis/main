const Skaiciai = () => {

    let skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const suma = () => {

        const isViso = skaiciai.reduce((acc, sk) => acc + sk, 0);
        alert(`Skaiciu masyvo duomenu suma - ${isViso}`)
    }

    const didziausias = () => {
        const bigNumba = Math.max(...skaiciai);
        alert(`disziausias skaicius masyve - ${bigNumba}`)
    }

    return (
        <div>
            <h3>Skaiciai</h3>
            <button onClick={suma}>suma</button>
            <button onClick={didziausias}>didziausias</button>
        </div>
    );
};

export default Skaiciai;
