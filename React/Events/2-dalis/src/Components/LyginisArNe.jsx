const LyginisArNe = () => {

    const inputHandler = (e) => {
        let value = e.target.value;

        if (value % 2 === 0) {
            console.log("lyginis")
        } else {
            console.log("nelyginis")
        }
    };

    return (
        <div>
            <h2>LyginisArNe</h2>
            <input type="number" onChange={inputHandler} />
        </div>
    );
};


export default LyginisArNe;
