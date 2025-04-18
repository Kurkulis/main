const Polindromas = () => {

    const inputHandler = (e) => {
        let value = e.target.value;


    };

    return (
        <div>
            <h2>Polindromas</h2>
            <input type="text" onChange={inputHandler} />
        </div>
    );
};


export default Polindromas;
