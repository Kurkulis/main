import Paslauga from "./Paslauga";

const Paslaugos = () => {

    return (
        <div className="paslaugosBlokas">
            <h2>Bloko antraste</h2>
            <div className="paslaugos">
                <Paslauga />
                <Paslauga />
                <Paslauga />
            </div>
        </div>
    );
};

export default Paslaugos;