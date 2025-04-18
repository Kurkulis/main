import { useState } from "react";

const Begikai = () => {

    const [begikas1, setBegikas1] = useState(0);
    const [begikas2, setBegikas2] = useState(0);



    const rezultatas = () => {

        if (begikas1 === 0 || begikas2 === 0) {
            return 'iveskite laikus'
        }

        if (begikas1 < begikas2) {
            return "begikas 1 greitesnis"
        } else if (begikas2 < begikas1) {
            return 'begikas 2 greitesnis'
        } else {
            return 'vienodai varo'
        }
    }

    const antKiek = () => {
        const skirtumas = Math.abs(begikas1 - begikas2);
        return skirtumas > 0 ? `ant ${skirtumas} ` : "";
    };

    return (
        <div>
            <h2>Begikai</h2>
            <p>per kiek sekundziu iveikei 100 metru:</p>
            <input type="number" placeholder="1 begikas" onInput={(e) => setBegikas1(+e.target.value)} />
            <input type="number" placeholder="2 begikas" onInput={(e) => setBegikas2(+e.target.value)} />
            <p>{rezultatas()} {antKiek()}</p>
        </div>
    );
};


export default Begikai;
