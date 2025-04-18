import { useState } from "react";

const Komp2 = () => {

    let zodziai = ['labas', 'rytas', 'blynas', 'makaka', 'suo'];
    let [istrauktas, setIstrauktas] = useState('====');

    const gautiRandomZodi = () => {
        let randomIndex = Math.floor(Math.random() * zodziai.length);


        setIstrauktas(zodziai[randomIndex]);
    }


    return (
        <div>
            <h2>Komp2</h2>
            <h3>random zodis</h3>
            <button onClick={gautiRandomZodi}>traukti</button>

            <p>Value: {istrauktas}</p>
        </div>
    );
};


export default Komp2;
