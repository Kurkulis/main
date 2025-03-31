const GeriausiasMedis = () => {

    const ivertintiMedi = (medis) => {
        if (medis === "uosias") {
            alert("Uosis – oho, koks rimtas!");
        } else if (medis === "azuolas") {
            alert("Ąžuolas – labai mielas raštas.");
        } else if (medis === "berzas") {
            alert("Beržas – toks baltas ir šviesus!");
        }
    };

    return (
        <div>
            <h2>Pasirink geriausią medį</h2>
            <button onClick={() => ivertintiMedi("uosias")}>Uosis</button>
            <button onClick={() => ivertintiMedi("azuolas")}>Ąžuolas</button>
            <button onClick={() => ivertintiMedi("berzas")}>Beržas</button>
        </div>
    );
};


export default GeriausiasMedis;
